import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import cardimg from "../../../assets/hero2.jpg"
import stars from "../../../assets/4star.png"

  export function CardDefault() {
    return (
      <Card className="mt-6 w-96 bg-[#f1ece0ff]">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
          src={cardimg}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
          100 Hours Yoga Teacher Training
          </Typography>
          <img className=" h-8"
          src={stars}
            alt="card-image"
          />
          <Typography>
          100 Hours Yoga Teacher Training is a comprehensive program that equips aspiring yoga teachers with fundamental knowledge and skills through intensive training over a period of 100 hours.

          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    );
  }