import Link from "next/link";


type hashTagData = {
    href: string;
    label: string;
};


const HasTagButton = ({ href, label }: hashTagData) => {
    return (
        <Link
            href={href}
            className="border border-red px-3 py-2 text-sm font-medium leading-6 text-red"
        >
            {label}
        </Link>
    );
};


export default HasTagButton;