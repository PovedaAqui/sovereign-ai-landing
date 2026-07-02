import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { name, email, country, variant, consent } = body

    // Validate required fields
    if (!name || !email || !country || !consent) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios son necesarios' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email no válido' },
        { status: 400 }
      )
    }

    // Check if already registered
    const { data: existing } = await supabase
      .from('reservations')
      .select('id')
      .eq('email', email)
      .limit(1)

    if (existing && existing.length > 0) {
      return NextResponse.json(
        { error: 'Este email ya está registrado' },
        { status: 409 }
      )
    }

    // Insert reservation
    const { data, error } = await supabase
      .from('reservations')
      .insert([{
        name,
        email,
        country,
        variant: variant || null,
        consent: Boolean(consent),
      }])
      .select()
      .single()

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Error al registrar. Inténtalo de nuevo.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, reservation: data })
  } catch (err) {
    console.error('Reservation error:', err)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
