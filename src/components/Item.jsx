import { useState } from "react"

export default function Item({ items }) {
    const [numberItems, setNumberItems] = useState(items.length)
    const [show, setShow] = useState(true)

    const handleNumberItems = () => {
        setNumberItems(0)
        setShow(false)
    }

    return (
        <>
            {show === true ?
                <div>
                    <h1 className="text-4xl">{numberItems} birthdays Today</h1>
                    <div className="mt-7">
                        {items.map(({ id, img, name, age }) => (
                            <div key={id} className="flex pb-7">
                                <img src={img} alt={img} className="rounded-full w-20 h-20 object-cover" />
                                <div className="flex flex-col justify-center p-3">
                                    <div className="text-2xl font-medium tracking-wider">{name}</div>
                                    <div className="text-gray-500">{age} years</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleNumberItems} className="bg-fuchsia-500 w-full text-white rounded p-0.5 hover:bg-fuchsia-800 transition">Clear All</button>
                </div> :
                <div>
                    <h1 className="text-4xl pb-5">{numberItems} birthdays Today</h1>
                    <button className="bg-fuchsia-500 w-full text-white rounded p-0.5 hover:bg-fuchsia-800 transition">Clear All</button>
                </div>}
        </>
    )
}