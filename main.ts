import { serve } from "./deps.ts";
import { errorToResponse } from "./error.ts";
import { handleRequest } from "./handle_request.ts";
serve(async (request) => {
  try {
    const responseBody = await handleRequest(request);
    return new Response(JSON.stringify(responseBody, null, 2), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    return errorToResponse(e);
  }
});
