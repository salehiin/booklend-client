import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

const Book = ({ book }) => {

    const { id, name, quantity, author, category, description, rating, content,  image } = book;
    

    return (
        <Card className="w-full max-w-[48rem] flex-row shadow-xl rounded-xl">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src={image}
                    alt="Book"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody className="p-4 text-left">
                <Typography variant="h6" color="gray" className="mb-4 uppercase text-xl">
                    {name}
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2 text-lg">
                    {content}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    {description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores voluptate temporibus corporis nihil eveniet voluptatem voluptatibus quo ipsum.
                </Typography>
                <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                    Explore Book
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </a>
            </CardBody>
        </Card>
    );
};

export default Book;



