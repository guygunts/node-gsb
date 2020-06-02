const DBRepository = require('../repositories/DBRepository');
const SimpleNodeLogger = require('simple-node-logger'),
opts = {
  logFilePath:'Logfile.log',
  timestampFormat:'YYYY-MM-DD HH:mm:ss'
},
log = SimpleNodeLogger.createSimpleLogger( opts );
class VoiceLogService{
    constructor (){
        this.DBRepository =new DBRepository();
    }
   async VoiceLog(req){
        try{
			console.log(req)
            const VoiceLog =await this.DBRepository.executeQuery("call sp_getlog_voice_qc2(?,@result);SELECT @result as result",[JSON.stringify(req)]);
            let data1 =[]
            let data2 =[]
            let data3 =[]
            let data4=[]

                    for(let [key, value] of VoiceLog[0].entries()){

                             data1.push(value)
                     }
                     
                
                for(let [key, value] of VoiceLog[1].entries()){
                         data2.push(value)
                 }

                 
                for(let [key, value] of VoiceLog[2].entries()){                  
                    data3.push(value)
                 }

                 for(let [key, value] of VoiceLog[3].entries()){
                    data4.push(value)
             }
     


            let resultJson
            resultJson = {
                "code": VoiceLog[4][0].result,
                "msg": VoiceLog[4][0].msg,
                "recnums": VoiceLog[4][0].recnum,
                "pagenum": VoiceLog[4][0].pagenum,
                "result": { 
                    "header": [{
                        "column_name": "Record ID",
                        "column_field": "rec_id",
                        "column_type": "text",
                        "column_align": "left"
                    },{
                        "column_name": "Date Time",
                        "column_field": "date_time",
                        "column_type": "text",
                        "column_align": "left"
                    },{
                        "column_name": "Sentence",
                        "column_field": "spok",
                        "column_type": "text",
                        "column_align": "left"
                    },{
                        "column_name": "% Sentence Confidence",
                        "column_field": "input_conf",
                        "column_type": "text",
                        "column_align": "left"
                    },{
                        "column_name": "Conversation",
                        "column_field": "voice_name",
                        "column_type": "text",
                        "column_align": "left"
                    },{
                        "column_name": "Best Intent",
                        "column_field": "intent",
                        "column_type": "text",
                        "column_align": "left"
                    },{
                        "column_name": " % Best Intent Confidence",
                        "column_field": "intent_conf",
                        "column_type": "text",
                        "column_align": "left"
                    },{
                        "column_name": "All Concept Result",
                        "column_field": "swi_mean",
                        "column_type": "text",
                        "column_align": "left"
                    },{
                        "column_name": "Top List Intent",
                        "column_field": "swi_ssm",
                        "column_type": "text",
                        "column_align": "left"
                    },{
                        "column_name": "Top List Confidence",
                        "column_field": "swi_conf",
                        "column_type": "text",
                        "column_align": "left"
                    },{
                        "column_name": "QC Status",
                        "column_field": "qc_status",
                        "column_type": "text",
                        "column_align": "left"
                    },{
                        "column_name": "Expected Intent",
                        "column_field": "Expected",
                        "column_type": "text",
                        "column_align": "left"
                    },{
                        "column_name": "Correct Sentence",
                        "column_field": "input_qc",
                        "column_type": "text",
                        "column_align": "left"
                    },{
                        "column_name": "Remark",
                        "column_field": "remark",
                        "column_type": "text",
                        "column_align": "left"
                    },{
                        "column_name": "Action",
                        "column_field": "action",
                        "column_type": "text",
                        "column_align": "left"
                    }],
                    "box1":data1,
                    "box2":data2,
                    "box3":data4,
                    "box4":data3
                }
            }
            log.info("response Data VoiceLog:",resultJson)
            return resultJson;
        }catch (err) {
            log.error("response Data VoiceLog:",err)
        }
    }
}
const voiceLogService =new VoiceLogService;
module.exports =voiceLogService;