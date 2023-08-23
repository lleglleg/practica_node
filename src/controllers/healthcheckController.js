module.exports = {
    HealthCheck
}
class HealthChecker {
    static check() {
     return {
        uptime: process.uptime(),
        response: process.hrtime(),
        message: 'OK',
        timestamp: Date.now()
      };
    }
  }
async function HealthCheck (req,res) {
    try {
      res.send(HealthChecker.check());
    } catch (error) {
      res.status(503).send(error);
    }
  }