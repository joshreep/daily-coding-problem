import JobScheduler from './JobScheduler'

describe('JobScheduler', () => {
    test('schedules a job', (done) => {
        const scheduler = new JobScheduler()
        const f = jest.fn()
        const n = 50

        scheduler.scheduleJob(f, n)
        expect(f).not.toHaveBeenCalled()

        setTimeout(() => {
            expect(f).toHaveBeenCalledTimes(1)
            done()
        }, n)
    })

    test('clears all pending jobs', (done) => {
        const scheduler = new JobScheduler()
        const jobs = [jest.fn(), jest.fn(), jest.fn()]
        jobs.forEach((f, i) => scheduler.scheduleJob(f, i * 20))

        scheduler.clearAllJobs()

        jobs.forEach((f) =>
            setTimeout(() => {
                expect(f).not.toHaveBeenCalled()
            }, 100),
        )

        done()
    })

    test('clears 1 pending job', (done) => {
        const scheduler = new JobScheduler()
        const job1 = jest.fn()
        const job2 = jest.fn()

        const job1Id = scheduler.scheduleJob(job1, 50)
        scheduler.scheduleJob(job2, 50)

        scheduler.clearJob(job1Id)

        setTimeout(() => {
            expect(job1).not.toHaveBeenCalled()
            expect(job2).toHaveBeenCalled()
            done()
        }, 50)
    })
})
