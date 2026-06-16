import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, url, description } = await request.json();
    
    // Log the submission (in a real app, save to database or send email)
    console.log('Tool submission received:', { name, url, description });
    
    // You could add validation here
    if (!name || !url || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Return success response
    return NextResponse.json(
      { message: 'Thank you for your submission! We\'ll review it soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing submission:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
