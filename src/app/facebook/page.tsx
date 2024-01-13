'use client'

import { useRouter } from "next/navigation";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Facebook = () => {
    const router = useRouter()

    const handleBtn = () => {
        router.push("/")
    }
    return (
        <div>
            Facebook page
            <div>

                <Button variant='danger'>Hỏi dân IT</Button>
                <button onClick={() => handleBtn()}>Back home</button>
            </div>
        </div>

    )
}

export default Facebook;