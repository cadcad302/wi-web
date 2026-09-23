

interface MatchProps {
    params: Promise<{
        slug: string;
    }>;
}


export default async function name({params}: MatchProps) {
    const promisedParams = await params;
    const slug = promisedParams.slug;

    return (
        <div>
            hi
            <br/>
            currently on match id {slug}
        </div>
    )
}