import { useLanyard } from 'react-use-lanyard';
import Link from 'next/link';

export function Presence() {
	const { loading, status } = useLanyard({
		userId: '848463685374443530',
		socket: true,
	});

	return (
		<>
			{status?.spotify ? (
						<>
							<p>{`Listening to ${status.spotify!.song} by ${status.spotify!.artist.replaceAll(';', ',')}`} &nbsp;</p>
							<Link
								passHref
								href={`https://open.spotify.com/track/${
									status.spotify!.track_id
								}`}
							>
								<img style={{borderRadius: '8px'}} width='90px' src={status.spotify!.album_art_url} />
							</Link>
						</>
					) : (
						<>
							<p>{'Not playing anything'} </p>
						</>
					)}
		</>
	);
}