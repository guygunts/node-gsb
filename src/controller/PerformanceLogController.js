const performance=require('../services/PerformanceLogService');

class performanceController{
    async performanceController(req,res){
        let body='';
        req.on('data', chunk => {
            body += chunk.toString('utf8'); 
        });
        req.on('end', async () => {
             const ret=await performance.InsertPerformance(body);
             res.json(ret);
             res.end();
        });

    }
}
const PerformanceController =new performanceController;
module.exports=PerformanceController;