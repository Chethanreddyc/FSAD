import 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { Link } from 'react-router-dom';
function Music() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
    <Card className="py-4 m-8">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Radio Mirchi</p>
        <small className="text-default-500">93.5mm</small>
        <h4 className="font-bold text-large">Music Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Link to="/images">
        <Image
          isZoomed
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
        </Link>
    </CardBody>
    </Card>
    </div>
  )
}

export default Music