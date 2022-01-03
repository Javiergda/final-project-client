import React from 'react'

export const Services = () => {
    return (
        <div className='Services_main'>
            <div className='wrap'>
                <h1>Nuestros Servicios</h1>
                <p>Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    dustry's standard dummy text ever since the 1500s.
                </p>

                <p>
                    when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className='boxs'>
                    <div className='box-text'>
                        <span className='numbers'>15</span>
                        <span>Alumnos/clase</span>
                    </div>

                    <div className='box-text'>
                        <span className='numbers'>8</span>
                        <span>Profesores</span>
                    </div>

                    <div className='box-text'>
                        <span className='numbers'>+ 10</span>
                        <span>Años de experiencia</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
