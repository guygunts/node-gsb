const DBRepository = require('../repositories/DBRepository');

class LogService {
    constructor() {
        this.DBRepository = new DBRepository();
    }
    async InsertLog(req) {
        try {

            // Process Log befor insert to DB and Report
            /*
            EVNT=SWIgrld|API=SWIrecGrammarActivate|TYPE=uri/2.0|URI=http://192.168.1.31:90/grammars/gsb-mainmenu.gram
            EVNT=SWIrcnd|RSTT=stop|RENR=stop|RCPU=354|UCPU=354|SCPU=0    
             Case OK/Lowconf
   
             1.EVNT=SWIgrld| 1
               API=SWIrecGrammarActivate|
               TYPE=uri/2.0|
               URI=http://192.168.1.31:90/grammars/gsb-mainmenu.gram   4
   
               EVNT=SWIrcnd| 1
               RSTT=ok| 2
               RENR=count|ENDR=ctimeout|NBST=1|
               RSLT={action:INFORM object:PROBLEM_WITHDRAWAL entity:NULL 
               intent:INFORM-PROBLEM_WITHDRAWAL}|6
               RAWT=บัตรเอทีเอ็ม|SPOK=บัตรเอทีเอ็ม 7,8
             2.EVNT=SWIgrld|API=SWIrecGrammarActivate|TYPE=uri/2.0|URI=http://192.168.1.31:90/grammars/yesno.gram
               EVNT=SWIrcnd|RSTT=ok|RENR=count|ENDR=ctimeout|NBST=1|RSLT={R_CONFIRM:YES answer:YES}|
               RAWT=ใช่ครับ|SPOK=ใช่ครับ
             3.EVNT=SWIgrld|API=SWIrecGrammarActivate|TYPE=uri/2.0|URI=http://192.168.1.31:90/grammars/GSB_PRODUCT_CARDS.gram
               EVNT=SWIrcnd|RSTT=ok|RENR=prun|ENDR=ctimeout|NBST=1|RSLT={CARD_TYPES:DEBIT_MASTER}|
               RAWT=มาสเตอร์การ์ด|SPOK=มาสเตอร์การ์ด 
   
               RSLT={action:INFORM object:PROBLEM_WITHDRAWAL entity:NULL intent:INFORM-PROBLEM_WITHDRAWAL
               RSLT={R_CONFIRM:YES answer:YES}    
               RSLT={ENTITY_A:GOVCARD ENTITY_B:NULL INTENTION:ENQUIRE_CARD-GOVCARD}
               RSLT={CARD_TYPES:DEBIT_MASTER}
   
               EVNT=SWIrcnd|RSTT=ok|RENR=count|ENDR=ctimeout|NBST=1|RSLT={ENTITY_A:NULL ENTITY_B:NULL INTENTION:ENQUIRE_LOAN}|RAWT=สอบถาม เรื่อง บัตรเครดิต|SPOK=สอบถาม เรื่อง บัตรเครดิต|GRMR=GURI0|KEYS=<ENTITY_A conf="11">NULL</ENTITY_A><SWI_semanticSource.ENTITY_A conf="11">ssm</SWI_semanticSource.ENTITY_A><SWI_semanticSource.ENTITY_B conf="11">ssm</SWI_semanticSource.ENTITY_B><SWI_semanticSource.INTENTION conf="11">ssm</SWI_semanticSource.INTENTION><ENTITY_B conf="11">NULL</ENTITY_B><INTENTION conf="11">ENQUIRE_LOAN</INTENTION><SWI_confidence conf="0">0</SWI_confidence><SWI_ssmMeanings.ENTITY_A conf="11">NULL::CREDITCARD::CREDITCARD</SWI_ssmMeanings.ENTITY_A><SWI_ssmMeanings.ENTITY_B conf="11">NULL::NULL::NULL</SWI_ssmMeanings.ENTITY_B><SWI_ssmMeanings.INTENTION conf="11">ENQUIRE_LOAN::ENQUIRE_CARD-CREDITCARD::ENQUIRE_APPROVAL-CREDITCARD</SWI_ssmMeanings.INTENTION><SWI_ssmConfidences.ENTITY_A conf="11">28::15::6</SWI_ssmConfidences.ENTITY_A><SWI_ssmConfidences.ENTITY_B conf="11">28::15::6</SWI_ssmConfidences.ENTITY_B><SWI_ssmConfidences.INTENTION conf="11">28::15::6</SWI_ssmConfidences.INTENTION>|CONF=11|RAWS=-2314.241943|CMPT=false|BCNF=417|OCNF=11|SCNF=0|SPIV=0|SPAG=0|WVNM=NUAN-24-16-nuance-1cce6e6c544aea14b4000a8c0d01-utt001-POSTEP.wav|MDVR=1359127808|NADP=0|CADP=0|LADP=N/A|MPNM=th.th/10.0.0/models/FirstPass/models.hmm|DPNM=NA|MACC=NULL|MEDIA=audio/basic;rate:8000|EOSS=3430|DURS=3430|EOSD=4180|BORT=98|EOST=3925|EORT=3950|EOFT=3932|CPRT=775|CPAR=0.182,0.105,-1.115,0.285,0.507,1.131,0.000,0.000,1.000,0.501,-1.420|LA=normal|OFFS=0.000000|SCAL=1.000000|SRCH=SB:-60.0,WB:-70.0,PLB:-20.0,SPO:81.0,MA:7300|RCPU=1451|UCPU=782|SCPU=0
               EVNT=SWIrslt|MEDIA=application/x-vnd.speechworks.emma+xml;strictconfidencelevel=1;mrcpv=2.06|CNTNT=
               <?xml version='1.0'?><result><interpretation grammar="session:1" confidence="0.01">
               <input mode="speech">สอบถาม เรื่อง บัตรเครดิต</input><instance>
               <ENTITY_A confidence="0.28">NULL</ENTITY_A><ENTITY_B confidence="0.28">NULL
               </ENTITY_B><INTENTION confidence="0.28">ENQUIRE_LOAN</INTENTION><SWI_literal>สอบถาม เรื่อง บัตรเครดิต
               </SWI_literal><SWI_grammarName>session:1</SWI_grammarName><SWI_meaning>
               {ENTITY_A:NULL ENTITY_B:NULL INTENTION:ENQUIRE_LOAN}</SWI_meaning><SWI_ssmMeanings>
               <ENTITY_A>NULL::CREDITCARD::CREDITCARD</ENTITY_A><ENTITY_B>NULL::NULL::NULL</ENTITY_B>
               <INTENTION>ENQUIRE_LOAN::ENQUIRE_CARD-CREDITCARD::ENQUIRE_APPROVAL-CREDITCARD</INTENTION>
               </SWI_ssmMeanings><SWI_ssmConfidences><ENTITY_A>28::15::6</ENTITY_A><ENTITY_B>28::15::6</ENTITY_B>
               <INTENTION>28::15::6</INTENTION></SWI_ssmConfidences></instance></interpretation></result>|UCPU=267|SCPU=0
               EVNT=SWIstop|MODE=SPCH|UCPU=332|SCPU=0 
      
               Log ทีมี Voice Name เท่านั้น 
               1 Call
               3 Conversation
               % Accuracy
                 Intent 
   
                 
            */
            var parseString = require('xml2js').parseString;
            var Log = req
            var st_date = ""
            var end_date = ""
            var logName = ""
            var rstt = ""
            var spoke = ""
            var conf = ""
            var xmlResult = ""
            var actgramm = ""
            var vname = ""
            var intenName = ""
            var intent = []
            var grammar = []
            var total_trans = 0
            var recog = 0
            var nonrecog = 0
            var chnn = ""
            var date_rec = ""
            var lang = ''
            var SWI_meaning = ''
            var SWI_ssmMeanings = ''
            var SWI_ssmConfidences = ''
            var BUILD_ver = ''
            var OSLE = ''
            var grammar_ver = ''
            var inputConf = ''
            var intentConf = ''
            //  var headGrammarver = ''
            // var arr = Log.split('\r\n');
            var arr = Log.split('\n');
            // console.log(arr.length)
            for (var i = 0; i < arr.length; i++) {

                if (i > 0) {
                    var Line = arr[i]
                    var rec = Line.split("|");

                    if (rec[2] === 'EVNT=SWIrcnd') {
                        total_trans = total_trans + 1
                        if (rec[3] === 'RSTT=ok' || rec[3] === 'RSTT=Lowconf') {
                            recog = recog + 1
                            chnn = rec[1]
                            date_rec = rec[0].substring(5)
                            if (rec.length > 20) {
                                if (rec[20].substring(0, 4) === 'WVNM') {
                                    vname = rec[20].substring(5)
                                } else {
                                    vname = rec[21].substring(5)
                                }
                                /*
                                RSLT={action:INFORM object:PROBLEM_WITHDRAWAL entity:NULL intent:INFORM-PROBLEM_WITHDRAWAL
                                RSLT={R_CONFIRM:YES answer:YES}    
                                RSLT={ENTITY_A:GOVCARD ENTITY_B:NULL INTENTION:ENQUIRE_CARD-GOVCARD}
                                RSLT={CARD_TYPES:DEBIT_MASTER}
                                */
                                var rslt = rec[7].substring(6, 12)
                                if (rslt === 'ENTITY') {
                                    var rec3 = rec[7].split(" ")
                                    intenName = rec3[2].substring(10)
                                    intenName = intenName.replace("}", "")
                                } else if (rslt === 'action') {
                                    var rec3 = rec[7].split(" ")
                                    intenName = rec3[3].substring(7)
                                    intenName = intenName.replace("}", "")
                                } else {
                                    intenName = rec[7].substring(5)
                                    intenName = intenName.replace("{", "")
                                    intenName = intenName.replace("}", "")
                                }
                                if (intenName.substring(0, 9) === 'R_CONFIRM') {
                                    intenName = intenName.substring(0, 13).trim()
                                }
                                if (actgramm === 'digits.gram' || actgramm === 'date.gram') {
                                    intenName = actgramm
                                }
                                spoke = rec[8].substring(5)
                                rstt = rec[3].substring(5)
                                conf = rec[12].substring(5)
                            } else {
                                if (rec.length > 8) {
                                    spoke = rec[8].substring(5)
                                    rstt = rec[3]
                                }
                            }
                        }
                        /*else {
                            nonrecog = nonrecog + 1
                            const item = {
                                "act_grammar": actgramm,
                                "spok": "",
                                "rstt": rec[3],
                                "intent": "",
                                "voice_name": "",
                                "recog": 0
                            }
                            intent.push(item)
                        }
                        */
                    } else if (rec[2] === 'EVNT=SWIgrld') {
                        if (rec[3] === 'API=SWIrecGrammarActivate') {
                            var arr_gram = rec[5].split('/')
                            actgramm = arr_gram[arr_gram.length - 1]
                            grammar_ver = arr_gram[arr_gram.length - 2]
                            // headGrammarver = grammar_ver
                            /*
                            const item = {
                                "grammar": arr_gram[5],
                                "grammar_ver" : arr_gram[4]
                            }
                            grammar.push(item)
                            */
                        } else {}
                    } else if (rec[2] === 'EVNT=SWIfrmt') {
                        if (st_date === "") {
                            st_date = rec[0].substring(5)
                        }
                    } else if (rec[2] === 'EVNT=SWIclnd') {
                        end_date = rec[0].substring(5)
                    } else if (rec[2] === 'EVNT=SWIrslt') {
                        xmlResult = rec[4].substring(6)
                        parseString(xmlResult, function (err, result1) {
                            //  console.dir(result1);
                            //  return
                            try {
                                inputConf = parseFloat(result1.result.interpretation[0].$.confidence) * 100
                            } catch (err) {}
                            try {
                                intentConf = parseFloat(result1.result.interpretation[0].instance[0].INTENTION[0].$.confidence) * 100
                            } catch (err) {}
                            try {
                                SWI_meaning = result1.result.interpretation[0].instance[0].SWI_meaning[0]
                            } catch (err) {}
                            try {
                                SWI_ssmMeanings = result1.result.interpretation[0].instance[0].SWI_ssmMeanings[0].INTENTION[0]
                            } catch (err) {}
                            try {
                                SWI_ssmConfidences = result1.result.interpretation[0].instance[0].SWI_ssmConfidences[0].INTENTION[0]
                            } catch (err) {}
                            try {
                                BUILD_ver = result1.result.interpretation[0].instance[0].BUILD[0]._
                            } catch (err) {}
                        });

                        const item = {
                            "date_time": date_rec,
                            "chnn": chnn.substring(5),
                            "act_grammar": actgramm,
                            "ver_grammar": grammar_ver,
                            "lang": lang,
                            "spok": spoke,
                            "rstt": rstt,
                            "intent": intenName,
                            "voice_name": vname,
                            "conf": conf,
                            "xml": xmlResult,
                            "recog": 1,
                            "n1": SWI_meaning,
                            "n2": SWI_ssmMeanings,
                            "n3": SWI_ssmConfidences,
                            "cf1": inputConf,
                            "cf2": intentConf
                        }
                        intent.push(item)
                        rstt = ""
                        spoke = ""
                        conf = ""
                        xmlResult = ""
                        actgramm = ""
                        vname = ""
                        intenName = ""
                        lang = ""
                        SWI_meaning = ''
                        SWI_ssmMeanings = ''
                        SWI_ssmConfidences = ''
                        grammar_ver = ''
                        inputConf = ''
                        intentConf = ''
                        // grammar =[]
                    } else if (rec[2] === 'EVNT=SWIrcst') {
                        lang = rec[7].substring(5)
                    } else if (rec[2] === 'EVNT=OSCL') {
                        if  (rec[3].substring(0,4) === 'OSLE')  {
                            OSLE = rec[3].substring(5)
                        }else {
                            OSLE = rec[3].substring(4) 
                        }
                    }
                } else {
                    logName = arr[0]
                }
            }

           // console.log(OSLE)

            var result = {
                "log_file": logName,
                "start_date": st_date,
                "end_date": end_date,
                "report": intent,
                "total_trans": total_trans,
                "recog": recog,
                "nonrecog": nonrecog,
                "ver_build" : BUILD_ver,
                "osle" :OSLE
            }
             // console.log(result.report)
             // return
            if (recog > 0) {
                const insert = await this.DBRepository.executeQuery("call sp_insert_log_report2(?,@result);", [JSON.stringify(result)])
                return insert;
            } else {
                var result2 = {
                    "code": 200,
                    "msg": 'success'
                }
                return result2
            }

        } catch (err) {

            return err
        }

    }

    async updatevoice(req) {
        try {
            const status = await this.DBRepository.executeQuery("call sp_update_voice_qc(?,@dt1);SELECT @dt1 as result", [JSON.stringify(req.body)])
            let item = []
            for (let i = 0; i < status[0].length; i++) {
                item = {
                    "code": status[0][i].result,
                    "msg": status[0][i].msg

                }
            }
			
            return item


        } catch (err) {
            return err;
        }

    }

    async getconversation(req) {
        try {
            const conver = await this.DBRepository.executeQuery("call sp_getconversation(?,@dt1);SELECT @dt1 as result;", [JSON.stringify(req.body)]);
            console.log(conver)
            let length = conver.length;
            var sub_menu = []
            let result = []
            let column = []
            let columns = []
            let columnsName = ''
            let arrcolumnName
            if (length !== 0) {
                for (let j = 0; j < conver[1].length; j++) {
                    const item = {
                        "msg": conver[1][j].msg,
                        "pagenum": conver[1][j].page_num,
                        "recnum": conver[1][j].rec_num,
                        "code": conver[1][j].result
                    }
                    columnsName = conver[1][j].columnName
                    result.push(item)
                }
                arrcolumnName = columnsName.split(',')
                for (let i = 0; i < conver.length; i++) {
                    if (sub_menu.length !== 0) {
                        break;
                    }

                   for (let j = 0; j < conver[0].length; j++) {
                        const item = {
                            "DATE_TIME": conver[i][j].DATE_TIME,
                            "LOG_FILE": conver[i][j].LOG_FILE,
                            "CHNN": conver[i][j].CHNN,
                            "VOICE_CNT": conver[i][j].VOICE_CNT,
                            "SPOK": conver[i][j].SPOK,
                            "input_conf":conver[i][j].input_conf,
                            "intent":conver[i][j].intent,
                            "intent_conf":conver[i][j].intent_conf,
                            "rstt": conver[i][j].rstt,
                            "GRNM": conver[i][j].GRNM
                        }
                        if (column.length == 0) {
                            for (const [key, value] of Object.entries(conver[i][j])) {
                                column.push(key)

                            }
                        }

                        sub_menu.push(item);
                    }
                    for (let e = 0; e < arrcolumnName.length; e++) {
                        const items = {
                            'column_name': arrcolumnName[e],
                            'column_data': column[e]
                        }
                        columns.push(items)
                    }
                }
            } else {
                sub_menu = [{}]
            }

            let resultJson = {
                "report_name": "conversation Report",
                "columns_name": columns,
                "recs": sub_menu,
                "result": result
            };
            console.log(resultJson)
			
            return resultJson;
        } catch (err) {
            console.log(err);
        }


    }

    async logdetail(req) {
        try {
            const logdetail = await this.DBRepository.executeQuery("call sp_getlog_detail(?,@dt1);SELECT @dt1 as result;", [JSON.stringify(req.body)]);
            var sub_menu = []
            let length = logdetail.length;
            let result = []
            let column = []
            let columns = []
            let columnsName = ''
            let arrcolumnName
            if (length !== 0) {
                for (let j = 0; j < logdetail[1].length; j++) {
                    const item = {
                        "msg": logdetail[1][j].msg,
                        "pagenum": logdetail[1][j].page_num,
                        "recnum": logdetail[1][j].rec_num,
                        "code": logdetail[1][j].result
                    }
                    columnsName = logdetail[1][j].columnsName
                    result.push(item)
                }
                arrcolumnName = columnsName.split(',')
                for (let i = 0; i < logdetail.length; i++) {
                    if (sub_menu.length !== 0) {
                        break;
                    }
                    for (let j = 0; j < logdetail[0].length; j++) {
                        const item = {
                            "date_time": logdetail[i][j].date_time,
                            "chnn": logdetail[i][j].chnn,
                            "evnt": logdetail[i][j].evnt,
                            "log1": logdetail[i][j].log1
                        }
                        if (column.length == 0) {
                            for (const [key, value] of Object.entries(logdetail[i][j])) {
                                column.push(key)

                            }
                        }

                        sub_menu.push(item);
                    }
                    for (let e = 0; e < arrcolumnName.length; e++) {
                        const items = {
                            'column_name': arrcolumnName[e],
                            'column_data': column[e]
                        }
                        columns.push(items)
                    }
                }
            } else {
                sub_menu = [{}]
            }

            let resultJson = {
                "report_name": "LogDetail Report",
                "columns_name": columns,
                "recs": sub_menu,
                "result": result

            };
			
            return resultJson;
        } catch (err) {

        }
    }

    async logvoice(req) {
        try {
            const logvoice = await this.DBRepository.executeQuery("call sp_getlog_voice(?,@dt1);SELECT @dt1 as result;", [JSON.stringify(req.body)]);
            var sub_menu = []
            let length = logvoice.length;
            let result = []
            let column = []
            let columns = []
            let columnsName = ''
            let arrcolumnName
            if (length !== 0) {
                for (let j = 0; j < logvoice[1].length; j++) {
                    const item = {
                        "msg": logvoice[1][j].msg,
                        "pagenum": logvoice[1][j].page_num,
                        "recnum": logvoice[1][j].rec_num,
                        "code": logvoice[1][j].result
                    }
                    columnsName = logvoice[1][j].columnName
                    result.push(item)
                }
                arrcolumnName = columnsName.split(',')
                for (let i = 0; i < logvoice.length; i++) {
                    if (sub_menu.length !== 0) {
                        break;
                    }
                    for (let j = 0; j < logvoice[0].length; j++) {
                        const item = {
                            "date_time": logvoice[i][j].date_time,
                            "log_file": logvoice[i][j].log_file,
                            "input_conf": logvoice[i][j].input_conf,
                            "voice_name": logvoice[i][j].voice_name,
                            "grammar": logvoice[i][j].grammar,
                            "spok": logvoice[i][j].spok,
                            "rstt_status": logvoice[i][j].rstt_status,
							"intent_conf":logvoice[i][j].intent_conf,
                            "intent": logvoice[i][j].intent,

                        }
                        if (column.length == 0) {
                            for (const [key, value] of Object.entries(logvoice[i][j])) {
                                column.push(key)

                            }
                        }

                        sub_menu.push(item);
                    }
                    for (let e = 0; e < arrcolumnName.length; e++) {
                        const items = {
                            'column_name': arrcolumnName[e],
                            'column_data': column[e]
                        }
                        columns.push(items)
                    }
                }
            } else {
                sub_menu = [{}]
            }

            let resultJson = {
                "report_name": "LogVoice Report",
                "columns_name": columns,
                "recs": sub_menu,
                "result": result
            };
			
            return resultJson;
        } catch (err) {

        }
    }
	
	async summaryqc(req) {
        let data =[]
        try{
            const summaryqc =await this.DBRepository.executeQuery("call sp_summary_qc_report(?,@result);SELECT @result as result",[JSON.stringify(req)]);

            console.log(summaryqc)
            for(let [key, value] of summaryqc[0].entries()){

                data.push(value)
        }
		
        return data;
        }catch (err) {
            console.log(err)
        }

    }
}
const logservice = new LogService();
module.exports = logservice;