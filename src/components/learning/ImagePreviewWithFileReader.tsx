import React, { useEffect, useRef, useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css';
type Props = {}

let code = `// reference to file input (trigger event on button)
const inputRef = useRef<HTMLInputElement>(null)
// image raw file
const [image, setImage] = useState<File>()

//converted image as dataURL format with FileReader API
const [dataUrl, setDataUrl] = useState<string>()

//lifecycle event for every image selected
useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setDataUrl(reader.result as string)
            }
            reader.readAsDataURL(image)
        } else {
            setDataUrl(undefined)
        }
}, [image])
`
const ImagePreviewWithFileReader = (props: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [image, setImage] = useState<File>()
    const [dataUrl, setDataUrl] = useState<string>()

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setDataUrl(reader.result as string)
            }
            reader.readAsDataURL(image)
        } else {
            setDataUrl(undefined)
        }
    }, [image])

    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>

                <h3>Image Preview with FileReader</h3>
                <p>Display an image preview prior to uploading it to any external server using navite javascript API such as <a className='font-semibold text-neutral-600 underline' href='https://developer.mozilla.org/en-US/docs/Web/API/FileReader' target='_blank'>FileReader</a>.</p>
            </div>

            <div>
                <h5>Sample</h5>
                <div className='p-6'>
                    {dataUrl ? <img src={dataUrl} alt="" className='w-44 h-44 rounded-full object-contain border' onClick={() => setImage(undefined)} /> :
                        <button
                            type='button'
                            className='w-44 h-44'
                            onClick={() => {
                                inputRef.current?.click()
                            }}>
                            Choose an Image
                        </button>
                    }
                    <input type="file" accept='image/*' hidden ref={inputRef}
                        onChange={(event) => {
                            if (event.target.files) {
                                let file = event.target.files[0]
                                if (file.type.startsWith('image')) {
                                    console.log(event.target.files)
                                    setImage(file)

                                }
                            } else {
                                setImage(undefined)
                            }

                        }}
                    />
                </div>
            </div>

            <div className='relative flex flex-col'>
                <h5>Sample Code</h5>
                <div className='relative inset-0'>

                    <pre className='rounded-md overflow-hidden  overflow-x-auto'>
                        <code className='language-javascript'>
                            {code}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default ImagePreviewWithFileReader