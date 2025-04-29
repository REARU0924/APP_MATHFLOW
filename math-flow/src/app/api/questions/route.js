import { NextResponse } from 'next/server'
import questions from '../../data/question.js'

export function GET() {
  return NextResponse.json(questions)
}
