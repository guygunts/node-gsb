const DBRepository = require('../repositories/DBRepository');

class PerformanceLogService {
    constructor() {
        this.DBRepository = new DBRepository();
    }
    async InsertPerformance(req) {
        try{
            const a= await this.DBRepository.executeQuery("call sp_insert_log_performance(?,@test,@msg);SELECT @test as result;select @msg as msg", [req]);
               return a[2][0].msg
        }catch(err){
            console.log(err)
        }
      
    }
}
const performancelog = new PerformanceLogService;
module.exports = performancelog;