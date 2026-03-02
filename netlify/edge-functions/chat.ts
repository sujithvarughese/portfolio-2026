export default async (request: Request) => {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { query } = await request.json();

    if (!query) {
      return new Response('Query is required', { status: 400 });
    }

    // Call OpenAI Assistants API with vector store
    const openaiResponse = await fetch("https://api.openai.com/v1/threads/runs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        "OpenAI-Beta": "assistants=v2"
      },
      body: JSON.stringify({
        assistant_id: Deno.env.get('ASSISTANT_ID'),
        thread: {
          messages: [
            {
              role: "user",
              content: query
            }
          ]
        },
        tools: [{
          type: "file_search"
        }],
        tool_resources: {
          file_search: {
            vector_store_ids: [Deno.env.get('VECTOR_STORE_ID')]
          }
        },
        max_prompt_tokens: 1000,
        max_completion_tokens: 150,
        stream: true,
      })
    });

    if (!openaiResponse.ok) {
      throw new Error(`OpenAI API error: ${openaiResponse.status}`);
    }

    // Return the streamed response directly
    return new Response(openaiResponse.body, {
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });

  } catch (error) {
    console.error('Edge function error:', error);
    return new Response('Internal server error', { status: 500 });
  }
};
