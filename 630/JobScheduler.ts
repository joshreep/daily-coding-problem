export default class JobScheduler {
    private jobs: NodeJS.Timeout[]

    constructor() {
        this.jobs = []
    }

    /**
     * @param f Function to call after specified time
     * @param n Number of milliseconds to wait to call function.
     */
    scheduleJob(f: (...args: any[]) => void, n: number) {
        const timeout = setTimeout(f, n)
        this.jobs.push(timeout)

        return timeout
    }

    clearAllJobs() {
        this.jobs.forEach((j) => this.clearJob(j))
    }

    /**
     *
     * @param id The NodeJS.Timeout that was returned from `scheduleJob`
     */
    clearJob(id: NodeJS.Timeout) {
        const index = this.jobs.indexOf(id)
        clearTimeout(this.jobs[index])
        this.jobs.splice(index, 1)
    }
}
