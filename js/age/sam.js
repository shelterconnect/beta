var birth = new Date('06/01/1999'),
	curr  = new Date(),
	diff = curr.getTime() - birth.getTime(),
	disp = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
document.write(disp);