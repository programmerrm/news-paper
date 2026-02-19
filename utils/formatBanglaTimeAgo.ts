export function formatBanglaTimeAgo(dateString: string) {
    const now = new Date();
    const past = new Date(dateString);

    const diffMs = now.getTime() - past.getTime();

    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    const toBanglaNumber = (num: number) =>
        num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);

    if (minutes < 1) return "এইমাত্র";
    if (minutes < 60) return `${toBanglaNumber(minutes)} মিনিট আগে`;
    if (hours < 24) return `${toBanglaNumber(hours)} ঘণ্টা আগে`;
    return `${toBanglaNumber(days)} দিন আগে`;
}
