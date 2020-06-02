const DBRepository = require('../repositories/DBRepository');
const jwt = require('jsonwebtoken');
let SimpleNodeLogger = require('simple-node-logger'),
opts = {
  logFilePath:'Logfile.log',
  timestampFormat:'YYYY-MM-DD HH:mm:ss'
},
log = SimpleNodeLogger.createSimpleLogger( opts );
class LoginService {
    constructor() {
        this.dbRepository = new DBRepository();
    }
    async loginUser(req) {
            const result = await this.loginUsers(req)
            log.info("response Data:",result)
            return result
    }
    async adminMenu(req) {
        try {
            if (req.body.menu_action == 'getmenus') {
                const result = await this.getMenu(req)
                log.info("response Data:",result)
                return result
            }
            if (req.body.menu_action == 'addmenu' || req.body.menu_action == 'updatemenu' || req.body.menu_action == 'deletemenu') {
                console.log(req.body)
                const result = await this.addupdatedeleteMenu(req)
                log.info("response Data:",result)
                return result 
        }
            if (req.body.menu_action == 'getfunctions') {
                const result = await this.getFunction(req)
                log.info("response Data:",result)
                return result
            }
            if (req.body.menu_action == 'addfunction' || req.body.menu_action == 'updatefunction' || req.body.menu_action == 'deletefunction') {
                const result = await this.addupdatedeleteFunction(req)
                log.info("response Data:",result)
                return result
                
        }
            // User Management
            if (req.body.menu_action == 'getusers') {
                const result = await this.getUser(req)
                log.info("response Data:",result)
                return result  
            }
            if (req.body.menu_action == 'adduser' || req.body.menu_action == 'updateuser' || req.body.menu_action == 'deleteuser') {
                const result = await this.addupdatedeleteUser(req)
                log.info("response Data:",result)
                return result
                
        }
            // Role Management 
            if (req.body.menu_action == 'getroles') {
                const result = await this.getRole(req)
                log.info("response Data:",result)
                return result
            }
            if (req.body.menu_action == 'addrole' || req.body.menu_action == 'updaterole' || req.body.menu_action == 'deleterole') {
                const result = await this.addupdatedeleteRole(req)
                log.info("response Data:",result)
                return result
             
        }
            if (req.body.menu_action == 'getprojects') {
                const result = await this.getProjects(req)
                log.info("response Data:",result)
                return result
            }

            if (req.body.menu_action == 'addproject' || req.body.menu_action == 'updateproject' || req.body.menu_action == 'deleteproject') {
                console.log(req.body)
                const result = await this.addupdatedeleteProjects(req)
                log.info("response Data:",result)
                return result
                
            }

            if (req.body.menu_action == 'getconcepts') {
                const result = await this.getConcepts(req)
                log.info("response Data:",result)
                return result
            }

            if (req.body.menu_action == 'addconcept' || req.body.menu_action == 'updateconcept' || req.body.menu_action == 'deleteconcept') {
                console.log(req.body)
                const result = await this.addupdatedeleteconcepts(req)// wait store
                log.info("response Data:",result)
                return result
                
            }

            if (req.body.menu_action == 'addconceptsvariation' || req.body.menu_action == 'updateconceptsvariation' || req.body.menu_action == 'deleteconceptsvariation') {
                console.log(req.body)
                const result = await this.addupdatedeleteconceptsvariation(req)//wait store
                log.info("response Data:",result)
                return result
                
            }

            if (req.body.menu_action == 'getprefixs') {
                const result = await this.getprefixs(req)//wait store
                log.info("response Data:",result)
                return result
            }

            if (req.body.menu_action == 'getcategory') {
                const result = await this.getcategory(req)//wait store
                log.info("response Data:",result)
                return result
            }

            if (req.body.menu_action == 'addcategory' || req.body.menu_action == 'updatecategory' || req.body.menu_action == 'deletecategory') {
                console.log(req.body)
                const result = await this.addupdatedeletecategory(req)//wait store
                log.info("response Data:",result)
                return result
                
            }

            if (req.body.menu_action == 'getintentbycateid') {
                const result = await this.getintentbycateid(req)//wait store
                log.info("response Data:",result)
                return result
            }

            if (req.body.menu_action == 'getsubintentbyintent') {
                const result = await this.getsubintentbyintent(req)//wait store
                log.info("response Data:",result)
                return result
            }

            if (req.body.menu_action == 'addintent' || req.body.menu_action == 'updateintent' || req.body.menu_action == 'deleteintent') {
                console.log(req.body)
                const result = await this.addupdatedeleteintent(req)//wait store
                log.info("response Data:",result)
                return result
                
            }

            if (req.body.menu_action == 'addsubintent' || req.body.menu_action == 'updatesubintent' || req.body.menu_action == 'deletesubintent') {
                console.log(req.body)
                const result = await this.addupdatedeletesubintent(req)//wait store
                log.info("response Data:",result)
                return result
                
            }

            if (req.body.menu_action == 'updateallcontent') {
                const result = await this.updateallcontent(req)//wait store
                log.info("response Data:",result)
                return result
            }

            if (req.body.menu_action == 'updateintentsentence') {
                const result = await this.updateintentsentence(req)//wait store
                log.info("response Data:",result)
                return result
            }

            if (req.body.menu_action == 'getsentencebyintent') {
                const result = await this.getsentencebyintent(req)//wait store
                log.info("response Data:",result)
                return result
            }

            if (req.body.menu_action == 'getsentencebysubintent') {
                const result = await this.getsentencebysubintent(req)//wait store
                log.info("response Data:",result)
                return result
            }
            
            if (req.body.menu_action == 'searchsentence') {
                const result = await this.searchsentence(req)//wait store
                log.info("response Data:",result)
                return result
            }

            if (req.body.menu_action == 'processsentence') {
                const result = await this.processsentence(req)//wait store
                log.info("response Data:",result)
                return result
            }


            if (req.body.menu_action == 'addsentence' || req.body.menu_action == 'updatesentence' || req.body.menu_action == 'deletesentence') {
                console.log(req.body)
                const result = await this.addupdatedeleteSentence(req)// wait store
                log.info("response Data:",result)
                return result
                
            }

            if (req.body.menu_action == 'uploadsentence') {
                const result = await this.uploadsentence(req)// wait store
                log.info("response Data:",result)
                return result
               
            }

            if (req.body.menu_action == 'movesentence') {
                const result = await this.moveSentence(req)// wait store
                log.info("response Data:",result)
                return result
               
            }

            if (req.body.menu_action == 'buildgrammar') {
                const result = await this.buildgrammar(req)// wait store
                log.info("response Data:",result)
                return result
               
            }
            
            if (req.body.menu_action == 'getgrammardeploy') {
                const result = await this.getgrammardeploy(req)// wait store
                log.info("response Data:",result)
                return result
               
            }

            if (req.body.menu_action == 'deploygrammar') {
                const result = await this.deployGrammar(req)// wait store
                log.info("response Data:",result)
                return result
               
            }

            if (req.body.menu_action == 'getgrammar') {
                const result = await this.getgrammar(req)// wait store
                log.info("response Data:",result)
                return result
               
            }

            if (req.body.menu_action == 'testgrammar') {
                const result = await this.testgrammar(req)//  wait store
                log.info("response Data:",result)
                return result
               
            }

            if (req.body.menu_action == 'getprefixconcepts') {
                const result = await this.getprefixconcepts(req)//  wait store
                log.info("response Data:",result)
                return result
               
            }

            if (req.body.menu_action == 'getsuffixconcepts') {
                const result = await this.getsuffixconcepts(req)//  wait store
                log.info("response Data:",result)
                return result
               
            }

            if (req.body.menu_action == 'updatepermission') {
                console.log(req.body.menus)
                const result = await this.updatepermission(req)
                log.info("response Data:",result)
                return result
               
            }
          
        } catch (err) {
            console.log(err);
            log.error("response Data:",err)
        }

    }

    async loginUsers(req){
        try {
            console.log(req)
            const rows = await this.dbRepository.executeQuery("SET @test = 0; call sp_login(?,?,?,@test,@msg); SELECT @test as result;select @msg as msg",
                [req.user_name, req.password, req.lang, req.authen_type]);
 
            var menus = []
            var sub_menu = []

            for (var i = 0; i < rows[1].length; i++) {

                // ------------------------------------>
                if (rows[1][i].sub_menu_nums > 0) {

                    sub_menu = []
                    const rows2 = await this.dbRepository.executeQuery("call sp_sub_menu(?,?,?);", [rows[2][0].role_id,rows[1][i].menu_id,rows[2][0].user_name]);
                        if(rows2[0].length !== 0){
                            
                        for (var i2 = 0; i2 < rows2[0].length; i2++) {
                                if(rows2[0][i2].sub_menu_id ==0){
                                    continue;
                                }
                            const item2 = {
                                "sub_menu_id": rows2[0][i2].sub_menu_id,
                                "sub_menu_name": rows2[0][i2].sub_menu_name,
                                "sub_menu_path": rows2[0][i2].sub_menu_url,
                                "sub_menu_icon": rows2[0][i2].sub_menu_icon,
                                "sub_menu_active": rows2[0][i2].sub_menu_active
                            }
                            sub_menu.push(item2)
                        }
                    }else{
                        sub_menu = [{}]
                    }
                   
               
                    const item = {
                        "menu_id": rows[1][i].menu_id,
                        "menu_name": rows[1][i].menu_name,
                        "menu_path": rows[1][i].menu_url,
                        "menu_icon": rows[1][i].menu_icon,
                        "menu_active": rows[1][i].menu_active,
                        sub_menu
                    }
                    menus.push(item);
                } else {
                    const item = {
                        "menu_id": rows[1][i].menu_id,
                        "menu_name": rows[1][i].menu_name,
                        "menu_path": rows[1][i].menu_url,
                        "menu_icon": rows[1][i].menu_icon,
                        "menu_active": rows[1][i].menu_active,
                        "sub_menu": [{}]
                    }
                    menus.push(item);
                }

            }
            var result
            var status = rows[5][0];
            if (rows[5][0].result == 401) {
                result = 0;
            } else if (rows[5][0].result == 200) {
                const token = jwt.sign({ status }, 'secretkey', { expiresIn: '1d' });
                result = token
            }

            var resultJson
            var roleID
            var roleName
            if (rows[2][0].user_name == 'superadmin') {
                roleID = 0
                roleName = "Super Admin"
            } else {
                roleID = rows[2][0].role_id
                roleName = rows[2][0].role_name
            }
            resultJson = {
                "code": rows[5][0].result,
                "msg": rows[6][0].msg,
                "token": result,
                "result": {
                    "profile": {
                        "first_name": rows[2][0].first_name,
                        "last_name": rows[2][0].last_name,
                        "prefix_name": rows[2][0].prefix_name,
                        "email": rows[2][0].email
                    },
                    "roles": [
                        {
                            "role_id": roleID,
                            "role_name": roleName,
                            menus,
                            "function": rows[3]
                        }
                    ],

                }
            }
			
            return resultJson

        } catch (err) {
            log.error("response Data LoginUser:",err)
        }
    }


    async getMenu(req) {
        try {
            const rows = await this.dbRepository.executeQuery("call sp_getmenu(@result,@msg,?,?,@recnum,@pagenum); SELECT @result as result;select @msg as msg,@recnum as recnum,@pagenum pagenum"
                , [req.body.page_id, req.body.page_size]);
            var data = []
            var sub_menu = []

            for (var i = 0; i < rows[0].length; i++) {
                if (rows[0][i].sub_menu_nums > 0) {
                    sub_menu = []
                    const rows2 = await this.dbRepository.executeQuery("call sp_sub_menu(?,?,?);",[0,rows[0][i].menu_id,"submenu"]);
                    if (rows2[0].length > 0) {
                        for (var i2 = 0; i2 < rows2[0].length; i2++) {
                            const item2 = {
                                "sub_menu_id": rows2[0][i2].sub_menu_id,
                                "sub_menu_name": rows2[0][i2].sub_menu_name,
                                "sub_menu_path": rows2[0][i2].sub_menu_url,
                                "sub_menu_icon": rows2[0][i2].sub_menu_icon,
                                "sub_menu_active": rows2[0][i2].sub_menu_active
                            }
                            sub_menu.push(item2)
                        }
                    } else {
                        sub_menu = [{}]
                    }
                    const item = {
                        "menu_id": rows[0][i].menu_id,
                        "menu_name": rows[0][i].menu_name,
                        "menu_path": rows[0][i].menu_url,
                        "menu_icon": rows[0][i].menu_icon,
                        "menu_active": rows[0][i].menu_active,
                        sub_menu
                    }
                    data.push(item);
                } else {
                    const item = {
                        "menu_id": rows[0][i].menu_id,
                        "menu_name": rows[0][i].menu_name,
                        "menu_path": rows[0][i].menu_url,
                        "menu_icon": rows[0][i].menu_icon,
                        "menu_active": rows[0][i].menu_active,
                        "sub_menu": [{}]
                    }
                    data.push(item);
                }

            }
            var resultJson
            resultJson = {
                "code": rows[2][0].result,
                "msg": rows[3][0].msg,
                "recnums": rows[3][0].recnum,
                "pagenum": rows[3][0].pagenum,
                "result": {
                    "header": [{
                        "column_name": "Menu Name",
                        "column_field": "menu_name",
                        "column_type": "text",
                        "column_align": "left"
                    }],
                    data
                }
            }
			
            return resultJson

        } catch (err) {
            log.error("response Data getMenu:",err)
        }
    }

    async addupdatedeleteMenu(req){
  
        try {
            const rows = await this.dbRepository.executeQuery("call sp_admin_menu(?,@result,@msg); SELECT @result as result;select @msg as msg;",
                [JSON.stringify(req.body)]);
				
            var resultJson
            resultJson = {
                "code": rows[1][0].result,
                "msg": rows[2][0].msg,
            }
			
            return resultJson
            
        } catch (err) {
            log.error("response Data addupdatedeleteMenu:",err)
        }
    }


    async getFunction(req) {

        try {
            const rows = await this.dbRepository.executeQuery("call sp_getfunction(@result,@msg,?,?,@recnum,@pagenum); SELECT @result as result;select @msg as msg,@recnum as recnum,@pagenum pagenum"
                , [req.body.page_id, req.body.page_size]);

            var resultJson
            resultJson = {
                "code": "200",
                "msg": rows[3][0].msg,
                "recnums": rows[3][0].recnum,
                "pagenum": rows[3][0].pagenum,
                "result": {
                    "header": [{
                        "column_name": "Function Name",
                        "column_field": "function_name",
                        "column_type": "text",
                        "column_align": "left"
                    }],
                    "data": rows[0]
                }
            }
			
            return resultJson

        } catch (err) {
            log.error("response Data getFunction:",err)
        }

    }

    
    async addupdatedeleteFunction(req){
        try {
            const rows = await this.dbRepository.executeQuery("call sp_admin_function(?,?,?,?,?,?,@result,@msg); SELECT @result as result;select @msg as msg",
                [req.body.menu_action, req.body.function_id, req.body.function_name, req.body.function_desc, req.body.function_active, req.body.user_login]);

            var resultJson
            resultJson = {
                "code": rows[1][0].result,
                "msg": rows[2][0].msg,
            }
			
            return resultJson

        } catch (err) {
            log.error("response Data addupdatedeleteFunction:",err)
        }
    }


    async getRole(req) {
        try {
            const rows = await this.dbRepository.executeQuery("SET @test = 0; call sp_getrole(@msg,?,?,@recnum,@pagenum,@test); SELECT @result as result;select @msg as msg,@recnum as recnum,@pagenum pagenum"
                , [req.body.project_id,req.body.page_id, req.body.page_size]);
            let data = []
            let menus = []
            let sub_menu=[]
            var functions = []
            for (var i = 0; i < rows[1].length; i++) {
                menus = []
                const menudata = await this.dbRepository.executeQuery("call sp_getrole_menu(?);", [rows[1][i].role_id]);
                functions =[]
               const item ={
                   "role_id":rows[1][i].role_id,
                   "role_name":rows[1][i].role_name,
                   "role_desc":rows[1][i].role_desc,
                   "menus":menus,
                   "function":functions
               }
               if(menudata[2].length !== 0){
                   for(let i=0; i<menudata[2].length; i++){
                    const item={
                        "role_id": menudata[2][i].role_id,
                        "function_id": menudata[2][i].function_id,
                        "function_name": menudata[2][i].function_name
                }
                functions.push(item)
                   }
               
            }else{
                functions.push({})
                functions =[]
                
            }
                let fix=0;
               for( fix=0; fix<menudata[0].length; fix++){
                sub_menu =[]
                const item={
                        "menu_id": menudata[0][fix].menu_id,
                        "menu_name": menudata[0][fix].menu_name,
                        "menu_url": menudata[0][fix].menu_url,
                        "menu_icon": menudata[0][fix].menu_icon,
                        "menu_active":menudata[0][fix].menu_active,
                        "sub_menu_nums":menudata[0][fix].sub_menu_nums,
                        "sub_menu":sub_menu
                }
                
                
                    for(let i=0; i<menudata[1].length; i++){
                        if(menudata[0][fix].menu_id == menudata[1][i].menu_id ){
                            if(menudata[1][i].sub_menu_id !== null ){
                    const item={
                        "menu_id": menudata[1][i].menu_id,
                        "sub_menu_id": menudata[1][i].sub_menu_id,
                        "sub_menu_name": menudata[1][i].sub_menu_name,
                        "sub_menu_url": menudata[1][i].sub_menu_url,
                        "sub_menu_icon":menudata[1][i].sub_menu_icon,
                        "sub_menu_active":menudata[1][i].sub_menu_active,              
                }
                sub_menu.push(item) 
                continue;
            }
            sub_menu.push({})
            sub_menu =[]
            }
            }
                menus.push(item)   
               }
               
               data.push(item)

            

            }

           
            var resultJson

            resultJson = {
                "code": "200",
                "msg": rows[4][0].msg,
                "recnums": rows[4][0].recnum,
                "pagenum": rows[4][0].pagenum,
                "result": {
                    "header": [{
                        "column_name": "Role Name",
                        "column_field": "role_name",
                        "column_type": "text",
                        "column_align": "left"
                    }, {
                        "column_name": "Role Description",
                        "column_field": "role_desc",
                        "column_type": "text",
                        "column_align": "left",
                    }],
                    "data":data
                    
                    
                }
            }
			
            return resultJson

        } catch (err) {
            log.error("response Data getRole:",err)
        }
    }

    async addupdatedeleteRole(req){
        try {
            const rows = await this.dbRepository.executeQuery("call sp_admin_role(?,?,?,?,?,?,@result,@msg); SELECT @result as result;select @msg as msg",
                [req.body.menu_action, req.body.role_id, req.body.role_name, req.body.role_desc, req.body.role_active, req.body.user_login]);
            // console.log(rows)
            // console.log(rows.length)
            var resultJson
            resultJson = {
                "code": rows[1][0].result,
                "msg": rows[2][0].msg,
            }
			
            return resultJson

        } catch (err) {
            log.error("response Data addupdatedeleteRole:",err)
        }
    }


    
    async getUser(req) {
        try {
            const rows = await this.dbRepository.executeQuery("call sp_getuser_role(@result,@msg,?,?,@recnum,@pagenum); SELECT @result as result;select @msg as msg,@recnum as recnum,@pagenum pagenum"
                , [req.body.project_id,req.body.page_id, req.body.page_size]);
            console.clear();
            // console.log(rows[0])
            // return
            var data = []
            var sub_menu = []

            for (var i = 0; i < rows[0].length; i++) {
                const item = {
                    "user_id": rows[0][i].user_id,
                    "user_name": rows[0][i].user_name,
                    "prefix": rows[0][i].prefix_name,
                    "first_name": rows[0][i].first_name,
                    "last_name": rows[0][i].last_name,
                    "password": rows[0][i].password,
                    "active": rows[0][i].active,
                    "user_type": rows[0][i].user_type,
                    "expire_date": rows[0][i].expire_date,
                    "expire_date_status": rows[0][i].expire_status,
                    "email": rows[0][i].email,
                    "role": {
                        "role_id": rows[0][i].role_id,
                        "role_name": rows[0][i].role_name
                    }
                }
                data.push(item);


            }
            var resultJson
            resultJson = {
                "code": rows[2][0].result,
                "msg": rows[3][0].msg,
                "recnums": rows[3][0].recnum,
                "pagenum": rows[3][0].pagenum,
                "result": {
                    "header": [{
                        "column_name": "First Name",
                        "column_field": "first_name",
                        "column_type": "text",
                        "column_align": "left"
                    }, {
                        "column_name": "Last Name",
                        "column_field": "last_name",
                        "column_type": "text",
                        "column_align": "left",
                    }, {
                        "column_name": "User Name",
                        "column_field": "user_name",
                        "column_type": "text",
                        "column_align": "left",
                    }, {
                        "column_name": "User Role",
                        "column_field": "user_role",
                        "column_type": "text",
                        "column_align": "left",
                    }, {
                        "column_name": "Active",
                        "column_field": "active",
                        "column_type": "checkbox",
                        "column_align": "center",
                    }],
                    data
                }
            }
			
            return resultJson

        } catch (err) {
            log.error("response Data getUser:",err)
        }
    }

    async addupdatedeleteUser(req){
        var resultJson
        console.log(req.body)
        try {
            const rows = await this.dbRepository.executeQuery("call sp_admin_user(?,@result,@msg); SELECT @result as result;select @msg as msg",
                [JSON.stringify(req.body)]);
            console.log(rows)
            

            if(!rows.length){
                resultJson = {
                    "code": rows.code,
                    "msg": rows.message,
                }
            }
			
            resultJson = {
                "code": rows[1][0].result,
                "msg": rows[2][0].msg,
            }

            
           
        } catch (err) {
            log.error("response Data addupdatedeleteUser:",err)
        }
		
		
        return resultJson
    }
    

    async getProjects(req) {
        try {
            const rows = await this.dbRepository.executeQuery("call sp_getprojects(?,@result); SELECT @result as result"
                , [JSON.stringify(req.body)]);

            var data = []

            for (var i = 0; i < rows[0].length; i++) {
                const item = {
                    "project_id": rows[0][i].project_id,
                    "project_name": rows[0][i].project_name,
                    "language": rows[0][i].language,
                    "channel": rows[0][i].channel,
                    "active": rows[0][i].active,
					"project_desc":rows[0][i].project_desc
                }
                data.push(item);
            }
            var resultJson
            resultJson = {
                "code": rows[1][0].result,
                "msg": rows[1][0].msg,
                "recnums": rows[1][0].rec_num,
                "pagenum": rows[1][0].page_num,
                "result": {
                    "header": [{
                        "column_name": "Project Name",
                        "column_field": "project_name",
                        "column_type": "text",
                        "column_align": "left"
                    }, {
                        "column_name": "Project Description",
                        "column_field": "project_desc",
                        "column_type": "text",
                        "column_align": "left",
                    }, {
                        "column_name": "Language",
                        "column_field": "language",
                        "column_type": "text",
                        "column_align": "left",
                    }, {
                        "column_name": "Channel",
                        "column_field": "channel",
                        "column_type": "text",
                        "column_align": "left",
                    }, {
                        "column_name": "Active",
                        "column_field": "active",
                        "column_type": "checkbox",
                        "column_align": "center",
                    }],
                    data
                }
            }
			
            return resultJson
        } catch (err) {
            log.error("response Data getProjects:",err)
        }
    }

    async addupdatedeleteProjects(req){
        try {
            const rows = await this.dbRepository.executeQuery("call sp_admin_project(?,@result); SELECT @result as result",

                [JSON.stringify(req.body)]);

            var resultJson
            resultJson = {
                "code": rows[0][0].result,
                "msg": rows[0][0].msg,
            }
			
            return resultJson
        } catch (err) {
            log.error("response Data addupdatedeleteProjects:",err)
        }
    }



    async updatepermission(req){
        try {
            var roleID = req.body.role_id
            var objMenu = req.body.menus
            let menuItem = ""
            var submenuItem = ""
            var objFunc = req.body.functions
            var funcItem = ""
            if(typeof objMenu !== 'undefined'){
            for (var i = 0; i < objMenu.length; i++) {
                if (menuItem == "") {

                    if (objMenu[i].sub_menus.length > 0) {
                        for (var i2 = 0; i2 < objMenu[i].sub_menus.length; i2++) {
                            if (submenuItem == "") {
                                submenuItem = objMenu[i].menu_id + ',' + objMenu[i].sub_menus[i2].sub_menu_id+'|'
                            } else {
                                submenuItem = submenuItem  + objMenu[i].menu_id + ',' + objMenu[i].sub_menus[i2].sub_menu_id+'|'

                            }
                        }
                    } else {
                        menuItem = objMenu[i].menu_id + ',' + objMenu[i].sub_menus.length+'|'
                    }

                } else {

                    if (objMenu[i].sub_menus.length > 0) {
                        for (var i2 = 0; i2 < objMenu[i].sub_menus.length; i2++) {
                            if (submenuItem == "") {
                                submenuItem = objMenu[i].menu_id + ',' + objMenu[i].sub_menus[i2].sub_menu_id+ '|'
                            } else {
                                submenuItem = submenuItem  + objMenu[i].menu_id + ',' + objMenu[i].sub_menus[i2].sub_menu_id+ '|'

                            }
                        }
                    } else {
                        menuItem += objMenu[i].menu_id + ',' + objMenu[i].sub_menus.length+ '|'
                    }

                }
            }
        }
            if(typeof objFunc !== 'undefined'){
                for (var i = 0; i < objFunc.length; i++) {
                    if (funcItem == "") {
                        funcItem = objFunc[i].function_id+ '|'
                    } else {
                        funcItem = funcItem  + objFunc[i].function_id+ '|'
                    }
                }
            }

            const rows = await this.dbRepository.executeQuery("call sp_update_permission(?,?,?,?,?,@result); SELECT @result as result",
                [roleID, menuItem, submenuItem, funcItem, req.body.user_login]);

            var resultJson
            for(let i=0; i<rows.length; i++){
                if(rows[i][0] ==null){
                    break
                }
                if(rows[i][0].result !==null ){
                    resultJson = {
                        "code": rows[i][0].result,
                        "msg": rows[i][0].msg,
                    }
                }
            }
           
            return resultJson

        } catch (err) {
            log.error("response Data addupdatedeleteProjects:",err)
        }

    }

	   async getConcepts(req) {
        try {
            const rows = await this.dbRepository.executeQuery("call sp_getconcept(?,@dt1);", [JSON.stringify(req.body)]);
            console.log(rows)
            let result = []
            let resultJson
            let columnName = ''
            let arrcolumnName
            let subcolumnName = ''
            let arrsubcolumnName
            let column = []
            let subresult = []
            let data = []
            columnName = rows[1][0].columnName
            arrcolumnName = columnName.split(',')

            subcolumnName = rows[1][0].subcolumnName
            arrsubcolumnName = subcolumnName.split(',')

            for (const [key, value] of Object.entries(rows[0][0])) {
                column.push(key)

            }
            for (let i = 0; i < arrcolumnName.length; i++) {
                let data = {
                    'column_name': arrcolumnName[i],
                    'column_data': column[i]
                }
                result.push(data)
            }

            for (let i = 0; i < arrcolumnName.length; i++) {
                column.shift();
            }
            let variation =[]

            for (let i = 0; i < rows[0].length; i++) {
                let body ={
                    "concept_id" : rows[0][i].concept_id,
	                "page_id" : req.body.page_id,
	                "page_size":req.body.page_size
                }

                const variation = await this.dbRepository.executeQuery("call sp_getconcept_variation(?,@dt1);", [JSON.stringify(body)]);
				console.log("data"+variation)
                let datasub = {
                    "concept_id": rows[0][i].concept_id,
                    "concept_name": rows[0][i].concept_name,
                    "lang": rows[0][i].lang,
                    "type": rows[0][i].type,
                    "active": rows[0][i].active,
                    "variation": variation[0]
                }
                data.push(datasub);
            }
            resultJson = {
                "code": rows[1][0].result,
                "msg": rows[1][0].msg,
                "page_num": rows[1][0].page_num,
                "rec_num": rows[1][0].rec_num,
                "result": result,
                "data": data


            }

            return resultJson
        } catch (err) {
            console.log(err);
        }
    }

        async addupdatedeleteconcepts(req){
            try{
                 const rows = await this.dbRepository.executeQuery("call sp_admin_concept(?,@dt1);", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": rows[0][0].result,
                    "msg": rows[0][0].msg,
                }
                return resultJson
            }catch(err){
                log.error("response Data addupdatedeleteconcepts:",err)
            }
        }

        async addupdatedeleteconceptsvariation(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "Operation Save Successfully",
                }
                return resultJson
            }catch(err){
                log.error("response Data addupdatedeleteconceptsvariation:",err)
            }

        }

        async getprefixs(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "success",
                    "result":{"data":{"prefix_id":"1","prefix_name":"Mr"}}
                }
                return resultJson
            }catch(err){
                log.error("response Data getprefixs:",err)
            }
        }

        async getcategory(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "success",
                    "result":{"data":{"category_id":"1",
                                      "category_name":"Bussiness",
                                      "sub_category":{"sub_category_name":"Credit Card",
                                                       "sub_category_id":"1",
                                                        "sub_category":"\\Recursive"}}}
                }
                return resultJson
            }catch(err){
                log.error("response Data getcategory:",err)
            }
        }

        async addupdatedeletecategory(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "Operation Save Successfully"
                }
                return resultJson
            }catch(err){
                log.error("response Data addupdatedeletecategory:",err)
            }
        }

        async getintentbycateid(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "success",
                    "result":{
                        "total_record": "1000",
                        "header":[{
                            "column_name" : "User Question",
                            "column_field" : "user_question",
                            "column_type" : "text",
                            "column_align" : "left",
                        },{
                            "column_name" : "Intent Tag",
                            "column_field" : "intet_tag",
                            "column_type" : "text",
                            "column_align" : "left",
                    },{
                        "column_name" : "Active",
                        "column_field" : "active",
                        "column_type" : "checkbox",
                        "column_align" : "center",
                },{
                        "column_name" : "Sentence",
                        "column_field" : "",
                        "column_type" : "button",
                        "column_align" : "center",
                }],
                "data":[{              "intent_id" : "1",
                "user_question" : "สอบถามข้อมูลบัตรเครดิต",
                "intent_tag" : "TAG-XXXX",
                "active" : "1"
                }]
  
                    }
                }
                return resultJson
            }catch(err){
                log.error("response Data getintentbycateid:",err)
            }
        }

        async getsubintentbyintent(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "success",
                    "result":{"total_record":"1000",
                               "header":[{
                                "column_name" : "Intent Tag",
                                "column_field" : "sub_intent_tag",
                                "column_type" : "text",
                                "column_align" : "left",
                        },{
                                "column_name" : "Type",
                                "column_field" : "sub_intent_type",
                                "column_type" : "text",
                                "column_align" : "left",
                        },{
                                "column_name" : "Active",
                                "column_field" : "active",
                                "column_type" : "checkbox",
                                "column_align" : "center",
                        },{
                                "column_name" : "Sentence",
                                "column_field" : "",
                                "column_type" : "button",
                                "column_align" : "center",
                               }]},
                    "data":[{
                        "sub_intent_id" : "1",     
                        "sub_intent_tag" : "TAG-XXXX",
                        "sub_intent_type" : "1 ",
                        "prefix_concept" : "1",
                        "suffix_concept" : "2",
                        "active": "1"      
        
                    }]           
                }
                return resultJson
            }catch(err){
                log.error("response Data getsubintentbyintent:",err)
            }
        }

        async addupdatedeleteintent(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "Operation Save Successfully"
                }
                return resultJson
            }catch(err){
                log.error("response Data addupdatedeleteintent:",err)
            }
        }

        async addupdatedeletesubintent(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "Operation Save Successfully"
                }
                return resultJson
            }catch(err){
                log.error("response Data addupdatedeletesubintent:",err)
            }
        }

        async updateallcontent(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "Operation Save Successfully"
                }
                return resultJson
            }catch(err){
                log.error("response Data updateallcontent:",err)
            }
        }

        async updateintentsentence(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "Operation Save Successfully"
                }
                return resultJson
            }catch(err){
                log.error("response Data updateintentsentence:",err)
            }
        }

        async getsentencebyintent(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "success",
                    "result":{"header":[{

                        "column_name" : "Sentence Origin",
                        "column_field" : "sentence_text_origin",
                        "column_type" : "text",
                        "column_align" : "left"
                      },{
                       "column_name" : "Sentence Process",
                       "column_field" : "sentence_text_process",
                       "column_type" : "text",
                       "column_align" : "left"
                     },{
                       "column_name" : "Type",
                       "column_field" : "sentence_type",
                       "column_type" : "text",
                       "column_align" : "left"
             
                    },{
                       "column_name" : "Active",
                       "column_field" : "active",
                       "column_type" : "checkbox",
                       "column_align" : "center"
                    }]},
             
                    "data":[{
                            "sentence_id" : "1",
                            "sentence_type" : "Voice",
                            "intent_id": "1",
                            "sub_intent_id":"",
                            "sentence_text_origin" : "เช็คยอดบัตรเครดิต",
                            "sentence_text_process" : "เช็ค ยอด บัตรเครดิต",
                            "count" : "1",
                            "active" : "1",
                          }]
                }
                return resultJson
            }catch(err){
                log.error("response Data getsentencebyintent:",err)
            }
        }

        
        async getsentencebysubintent(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "success",
                    "result":{"header":[{

                        "column_name" : "Sentence Origin",
                        "column_field" : "sentence_text_origin",
                        "column_type" : "text",
                        "column_align" : "left"
                      },{
                       "column_name" : "Sentence Process",
                       "column_field" : "sentence_text_process",
                       "column_type" : "text",
                       "column_align" : "left"
                     },{
                       "column_name" : "Type",
                       "column_field" : "sentence_type",
                       "column_type" : "text",
                       "column_align" : "left"
             
                    },{
                       "column_name" : "Active",
                       "column_field" : "active",
                       "column_type" : "checkbox",
                       "column_align" : "center"
                    }]},
             
                    "data":[{
                        "sentence_id" : "1",
                        "sentence_type" : "Voice",
                        "intent_id": "1",
                        "sub_intent_id": "",
                        "sentence_text_origin" : "เช็คยอดบัตรเครดิต",
                        "sentence_text_process" : "เช็ค ยอด บัตรเครดิต",
                        "count" : "1",
                        "active" : "1",
          
                          }]
                }
                return resultJson
            }catch(err){
                log.error("response Data getsentencebysubintent:",err)
            }
        }

        async searchsentence(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "success",
                    "result":{"header":[{

                        "column_name" : "Sentence Origin",
                        "column_field" : "sentence_text_origin",
                        "column_type" : "text",
                        "column_align" : "left"
                      },{
                       "column_name" : "Sentence Process",
                       "column_field" : "sentence_text_process",
                       "column_type" : "text",
                       "column_align" : "left"
                     },{
                       "column_name" : "Type",
                       "column_field" : "sentence_type",
                       "column_type" : "text",
                       "column_align" : "left"
             
                    },{
                       "column_name" : "Active",
                       "column_field" : "active",
                       "column_type" : "checkbox",
                       "column_align" : "center"
                    }]},
             
                    "data":[{
                        "sentence_id" : "1",
                        "sentence_type" : "Voice",
                        "intent_id": "1",
                        "sub_intent_id": "",
                        "sentence_text_origin" : "เช็คยอดบัตรเครดิต",
                        "sentence_text_process" : "เช็ค ยอด บัตรเครดิต",
                        "count" : "1",
                        "active" : "1",
          
                          }]
                }
                return resultJson
            }catch(err){
                log.error("response Data searchsentence:",err)
            }
        }

        async processsentence(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "success",
                    "result":{"data":{"sentence_text1" : "ตรวจ",
                                      "sentence_text2":"สอบ",
                                      "sentence_text3":"บัตรเครดิต"}}
                }
                return resultJson
            }catch(err){
                log.error("response Data processsentence:",err)
            }
        }

        async addupdatedeleteSentence(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "Operation Save Successfully"
                }
                return resultJson
            }catch(err){
                log.error("response Data addupdatedeleteSentence:",err)
            }
        }

        async uploadsentence(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "Operation Save Successfully"
                }
                return resultJson
            }catch(err){
                log.error("response Data uploadsentence:",err)
            }
        }

        async moveSentence(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "Operation Save Successfully"
                }
                return resultJson
            }catch(err){
                log.error("response Data moveSentence:",err)
            }
        }

        async buildgrammar(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "Operation Save Successfully"
                }
                return resultJson
            }catch(err){
                log.error("response Data buildgrammar:",err)
            }
        }

        async getgrammardeploy(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "success",
                    "result":{
                        "header":[{
                            "column_name" : "Description",
                            "column_field" : "grammar_description",
                            "column_type" : "text",
                            "column_align" : "left"
                          },{
                           "column_name": "Version",
                           "column_field": "grammar_version",
                           "column_type": "text",
                           "column_align": "left"
                    },{
                           "column_name": "Active By",
                           "column_field": "active_by",
                           "column_type": "text",
                           "column_align": "left"
                    },{
                           "column_name": "Active",
                           "column_field": "active",
                           "column_type": "button",
                           "column_align": "center"
                    }],
                    },
                    "data":[{
                        "server_id" : "1",
                        "server_name" : "Production",
                        "grammar_description": "GSB Grammar V. 1.0",
                        "active_by": "admin",
                        "active" : "1"
                    },
                    {
                        "server_id" : "2",
                        "server_name" : "PreProduction",
                        "grammar_description": "GSB Grammar V. 1.0",
                        "active_by": "admin",
                        "active" : "1",
                    }
                ]
                }
                return resultJson
            }catch(err){
                log.error("response Data getgrammardeploy:",err)
            }
        }

        async deployGrammar(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "Operation Save Successfully"
                }
                return resultJson
            }catch(err){
                log.error("response Data deployGrammar:",err)
            }
        }

        async getgrammar(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "success",
                    "result":{
                        "header":[{
                            "column_name" : "ID",
                            "column_field" : "grammar_id",
                            "column_type" : "text",
                            "column_align" : "left"
                          },{
                           "column_name": "Create Date",
                           "column_field": "create_date",
                           "column_type": "text",
                           "column_align": "left"
                    },{
                           "column_name": "User",
                           "column_field": "create_by",
                           "column_type": "text",
                           "column_align": "left"
                    },{
                           "column_name": "Description",
                           "column_field": "grammar_description",
                           "column_type": "text",
                           "column_align": "left"
                    },{
                           "column_name": "Version",
                           "column_field": "grammar_version",
                           "column_type": "text",
                           "column_align": "left"
                    }],
                    "data":[{
                        
                            "grammar_id" : "1",
                            "grammar_description" : " GSB Grammar V. 1.0",
                            "grammar_version": "1.0",
                            "create_by": "admin",
                            "create_date": "10/10/2020",
                            "active" : "1"
                          },
                          {
                            "grammar_id" : "2",
                            "grammar_description" : " GSB Grammar V. 2.0",
                            "grammar_version": "2.0",
                            "create_by": "admin",
                            "create_date": "10/12/2020",
                            "active" : "1"
                    }]
                    }
                }
                return resultJson
            }catch(err){
                log.error("response Data getgrammar:",err)
            }
        }

        async testgrammar(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "success",
                    "result":{"test_results":[{
                        "test_file_name" : "xxxx.wav",
                        "test_text" : "",
                        "value" : "TAG-CREDIT_CARD_CHECK_BALANCE"
                    },
                    {
                        "test_file_name": "xxxx2.wav",
                        "test_text":"",
                        "value": "TAG-XXXX " 

                    }]}
                }
                return resultJson
            }catch(err){
                log.error("response Data testgrammar:",err)
            }
        }

        async getprefixconcepts(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "success",
                    "result":{
                        "header":[{
                            "column_name" : "Concept Name",
                            "column_field" : "concept_name",
                            "column_type" : "text",
                            "column_align" : "left"
                          },{
                           "column_name": "Type",
                           "column_field": "type",
                           "column_type": "text",
                           "column_align": "left",
                         },{
                           "column_name": "Active",
                           "column_field": "active",
                           "column_type": "checkbox",
                           "column_align": "center",
                         }],
                        "sub_header" : [{
                           "column_name": "Concept Result",
                           "column_field": "concept_result",
                           "column_type": "text",
                           "column_align": "left",
                        },{
                           "column_name": "Variation",
                           "column_field": "variation_text",
                           "column_type": "text",
                           "column_align": "left",
                        },{
                           "column_name": "Active",
                           "column_field": "active",
                           "column_type": "checkbox",
                           "column_align": "center",
                        }],
                    },
                    "data":[{
                        "concept_id" : "1",
                        "concept_name" : "PREMIER_INFO" ,
                        "type": "1",
                        "active": "1",
                        "variation": [{
                              "variation_id" : "1",
                              "concept_result" : "PREMIER_CARD",
                              "variation_text" : "บัตรเครดิตพรีเมี่ยม",
                              "active" : "1"
                       }]
                  }]
                }
                return resultJson
            }catch(err){
                log.error("response Data getprefixconcepts:",err)
            }
        }

        async getsuffixconcepts(req){
            try{
                // const rows = await this.dbRepository.executeQuery("", [JSON.stringify(req.body)]);
                let resultJson
                resultJson = {
                    "code": "200",
                    "msg": "success",
                    "result":{
                        "header":[{
                            "column_name" : "Concept Name",
                            "column_field" : "concept_name",
                            "column_type" : "text",
                            "column_align" : "left"
                          },{
                           "column_name": "Type",
                           "column_field": "type",
                           "column_type": "text",
                           "column_align": "left",
                         },{
                           "column_name": "Active",
                           "column_field": "active",
                           "column_type": "checkbox",
                           "column_align": "center",
                         }],
                        "sub_header" : [{
                           "column_name": "Concept Result",
                           "column_field": "concept_result",
                           "column_type": "text",
                           "column_align": "left",
                        },{
                           "column_name": "Variation",
                           "column_field": "variation_text",
                           "column_type": "text",
                           "column_align": "left",
                        },{
                           "column_name": "Active",
                           "column_field": "active",
                           "column_type": "checkbox",
                           "column_align": "center",
                        }],
                    },
                    "data":[{
                        "concept_id" : "1",
                        "concept_name" : "PREMIER_INFO" ,
                        "type": "1",
                        "active": "1",
                        "variation": [{
                              "variation_id" : "1",
                              "concept_result" : "PREMIER_CARD",
                              "variation_text" : "บัตรเครดิตพรีเมี่ยม",
                              "active" : "1"
                       }]
                  }]
                }
                return resultJson
            }catch(err){
                log.error("response Data getsuffixconcepts:",err)
            }
        }


}

const loginService = new LoginService();
module.exports = loginService;








