import React, { FC, useState, useRef } from 'react';

const EventsExample = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(`Ось Х: ${event.clientX}, ось y: ${event.clientY}`)
        console.log(inputRef.current?.value)
    }

    const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }

    const dragWithPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(true)
        console.log('onDragOver')
    }

    const leaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(false)
        console.log('LEAVE')
    }

    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(false)
        console.log('DROP')
    }


    return (
        <div>
            <input type="text" value={value} onChange={changeHandler} placeholder='Управляемый' />
            <input type="text" ref={inputRef} placeholder='Неуправляемый' />
            <button onClick={clickHandler}>Click</button>
            <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, backgroundColor: 'red' }}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{ width: 200, height: 200, backgroundColor: isDrag ? 'green' : 'red', margin: '10px 0 0 0' }}></div>
        </div>
    )
}

export default EventsExample;