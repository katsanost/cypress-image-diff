class TestStatus {
  constructor({ status, name, percentage, failureThreshold }) {
    this.status = 'pass'
    this.name = name
    this.percentage = percentage
    this.failureThreshold = failureThreshold
  }
}

export default TestStatus
