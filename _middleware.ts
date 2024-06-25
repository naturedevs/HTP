import { NextRequest, NextResponse } from 'next/server';

export async function getClientIPMiddleware(originalResponse: Response, request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for') || '';
  let clientIp = forwardedFor? forwardedFor.split(',')[0] : '';

  const handleStream = () => {
    return new TransformStream({
      transform(chunk, controller) {
        controller.enqueue(`<script>window.CLIENT_IP="${clientIp}";</script>\n`);
        controller.enqueue(chunk);
      },
    });
  };

  // Assuming you have a way to get the original response body as a stream
  // This part depends on where and how you're fetching the response body
  const originalBodyStream = /* fetch or obtain the original response body as a stream */;

  // Create a new ReadableStream from the original body
  const transformedStream = originalBodyStream.pipeThrough(handleStream());

  // Now, you would typically convert this transformed stream back to a response
  // This step depends on your specific requirements and the framework/library you're using

  // Example: Creating a new Response with the transformed stream
  const modifiedResponse = new Response(transformedStream, {
    headers: new Headers(originalResponse.headers),
  });

  return modifiedResponse;
}
