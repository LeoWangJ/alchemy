import Link from "next/link";
import Image from "next/image";
export default function Profile(props: { displayFullProfile: any; profile: any; }){
    const {displayFullProfile,profile} = props
    return (
        <div className="p-8">
            <Link href={`/profile/${profile.id}`}>
                <div className="bg-white rounded-xl mx-auto max-w-md shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                        {profile.picture ? (
                            <Image
                            width={50}
                            height={50}
                            src={
                                profile.picture.original
                                ? profile.picture.original.url
                                : profile.picture.uri
                            }
                            alt='profile picture'
                            className="object-cover h-48 w-full md:h-full md:w-48"
                            />
                        ) : (
                            <div
                            style={{backgroundColor: "gray"}}
                            className="object-cover h-48 w-full md:h-full md:w-48"
                            />
                        )}
                        </div>
                        <div className="p-8">
                        <div className="font-semibold text-sm tracking-wide text-indigo-500 uppercase">
                            {profile.handle}
                            {displayFullProfile &&
                            profile.name &&
                            " (" + profile.name + ")"}
                        </div>
                        <div className="font-medium mt-1 text-sm text-black leading-tight block hover:underline">
                            {profile.bio}
                        </div>
                        <div className="mt-2 text-sm text-slate-900">{profile.ownedBy}</div>
                        <p className="mt-2 text-xs text-slate-500">
                            following: {profile.stats.totalFollowing} followers:{" "}
                            {profile.stats.totalFollowers}
                        </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}