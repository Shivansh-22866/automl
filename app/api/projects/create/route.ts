import { NextResponse } from 'next/server';
import { createProject } from '@/lib/actions/project.actions';

export async function POST(req: Request) {
  const { title, description, fileUrl, ownerId } = await req.json();

  try {
    const project = await createProject({ title, description, fileUrl, ownerId });
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error('Failed to create project', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
