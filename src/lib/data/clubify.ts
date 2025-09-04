export const designations = [
	'Vibe President',
	'Office Secretary',
	'President',
	'Vice President (Sleeping)',
	'Procrastination Secretary',
	'Pizza Officer',
	'Snacks Secretary',
	'President',
	'General Secretary',
	'Organizing Secretary',
	'Chair & Table',
	'Chair',
	'Vice Table',
	'Vice Chair',
	'Chief Chaos Officer',
	'Somonnoyok',
	'Somonnoyok',
	'Somonnoyok',
	'Somonnoyok',
	'Chief Fun Officer'
];

export const clubs = [
	'Procrastination Society (PS)',
	'Amra Sobai Single Club (ASSC)',
	'Low CGPA Club (LCGC)',
	'Last Bench Alliance (LBA)',
	'Meme Research Institute (MRI)',
	'Ghum Lovers Association (GLA)',
	'Zero Attendance League (ZAL)',
	'Tea Lovers Club (TLC)',
	'Bhallagena Federation (BF)',
	'High CGPA Club (HCGC)',
	'Kaal Theke Porbo Club (KTPC)',
	'Exam Pichhano Andolon (EPA)',
	'CopyPasta Masters (CPM)',
	'CT Pichhano Club (CTPC)',
	'ChatGPT Users Club (CGC)',
	'Reels Watchers Association (RWA)',
	'Proxy Dish Association (PDA)',
	'Term Final Picchano Club (TFPC)',
	'Assignment Pichhano Society (APS)',
	'Deadline Defiers (DD)',
	'The Last Minute Club (LMC)',
	'The All-Nighter Society (ANS)',
	"The Procrastinators' Guild (TPG)",
	'The Chill Zone (TCZ)',
	'The Lazy Legends (TLL)',
	'The Sleepy Scholars (TSS)',
	'Pujar Pore Exam Club (PPEC)',
	'Ekta Cycle Jodi? Club (ECC)'
];

export const getRandomDesignation = () => {
	return designations[Math.floor(Math.random() * designations.length)];
};

export const getRandomClub = () => {
	return clubs[Math.floor(Math.random() * clubs.length)];
};

// Helper function to get a different designation
export const getDifferentDesignation = (currentDesignation: string): string => {
	let newDesignation = getRandomDesignation();
	// Keep trying until we get a different designation
	while (newDesignation === currentDesignation) {
		newDesignation = getRandomDesignation();
	}
	return newDesignation;
};

// Helper function to get a different club
export const getDifferentClub = (currentClub: string): string => {
	let newClub = getRandomClub();
	// Keep trying until we get a different club
	while (newClub === currentClub) {
		newClub = getRandomClub();
	}
	return newClub;
};
