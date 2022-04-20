const os = require("os");

// current user
// console.log(os.userInfo());

// system uptime
// const sysUptime = os.uptime();
// console.log(sysUptime);
// console.log(os.tmpdir());
const currentOs = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
	tmpdir: os.tmpdir(),
	defDir: os.homedir(),
	arch: os.arch(),
	cpus: os.cpus(),
	priority: os.getPriority(),
	loadAverages: os.loadavg(),
	version: os.version(),
};

console.log(currentOs);
