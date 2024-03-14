import React from 'react';


const zohoWebForm = `<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10000">
    <div class="bg-white p-2 md:p-8 rounded-md max-w-md md:w-full md:max-w-xl flex flex-col md:flex-row relative z-10001">
        <span class="absolute top-[-7px] right-[-8px] text-gray-600 text-xl cursor-pointer transition-transform transform hover:scale-110" onclick="
            var popupContainer = document.querySelector('.fixed');
            popupContainer.classList.add('opacity-0');
            setTimeout(function () {
                popupContainer.remove();
            }, 500);
        "> <img src="/cross.png" alt="close" class="w-6 h-6"> </span>
        <div class="md:w-1/2 overflow-hidden"> <img src="/popupImg.jpg" alt="Image" class="w-full h-full hidden md:inline-block"> </div>
        <div id='crmWebToEntityForm' class='md:w-1/2 md:ml-4'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'>
            <form
             id='webform'
            class='p-4 bg-white rounded-md shadow-lg'
            action='https://crm.zoho.com/crm/WebToLeadForm'
            name='WebToLeads2662866000048987061'
            method='POST'
            accept-charset='UTF-8'
            onsubmit="javascript:document.charset='UTF-8'; document.querySelector('.fixed').style.display = 'none'; return true;"
            target='_blank'
         try {
         if(fieldObj.name == ' Last Name') { name=fieldObj.value; } } catch (e) {} } } trackVisitor(); var urlparams=new URLSearchParams( window.location.search); if(urlparams.has('service') && (urlparams.get('service')==='smarturl' )){ var webform=document.getElementById('webform'); var service=urlparams.get('service'); var smarturlfield=document.createElement('input'); smarturlfield.setAttribute('type','hidden'); smarturlfield.setAttribute('value',service); smarturlfield.setAttribute('name','service'); webform.appendChild(smarturlfield); } document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true); }; mandatoryCheck(); return false;'> <input type='text' style='display:none;' name='xnQsjsdp' value='fce7f163517f233a52d35402f6fa78590f64a6cc2479ef0c7810de9dffd41ece'></input> <input type='hidden' name='zc_gad' id='zc_gad' value=''></input> <input type='text' style='display:none;' name='xmIwtLD' value='aafcfe9b35232a296481c6b8713b188ad413ebb114edc851ffd4e70ca4449cc1061a00e4a70094c9884720c5a61df1d3'></input> <input type='text' style='display:none;' name='actionType' value='TGVhZHM='></input> <input type='text' style='display:none;' name='returnURL' value='null'>  <!-- Do not remove this code. --> <input type='text' style='display:none;' id='ldeskuid' name='ldeskuid'></input> <input type='text' style='display:none;' id='LDTuvid' name='LDTuvid'></input> <!-- Do not remove this code. -->
                <style>
                    /* Updated style starts here */
                    html,body{
                        margin: 0px;
                    }
                    #crmWebToEntityForm.zcwf_lblLeft {
                        width:100%;
                        padding: 25px;
                        margin: 0 auto;
                        box-sizing: border-box;
                    }
                    #crmWebToEntityForm.zcwf_lblLeft * {
                        box-sizing: border-box;
                    }
                    #crmWebToEntityForm{text-align: left;}
                    #crmWebToEntityForm * {
                        direction: ltr;
                    }
                    .zcwf_lblLeft .zcwf_title {
                        word-wrap: break-word;
                        padding: 0px 6px 10px;
                        font-weight:bold 
                    }
                    .zcwf_lblLeft.cpT_primaryBtn:hover{
                        background: linear-gradient(#02acff 0,#006be4 100%) no-repeat padding-box !important;
                        box-shadow: 0 -2px 0 0 #0159b9 inset !important;
                        border: 0 !important;
                        color: #fff !important;
                        outline: 0 !important;
                    }
                    .zcwf_lblLeft .zcwf_col_fld input[type=text], input[type=password], .zcwf_lblLeft .zcwf_col_fld textarea {
                        width: 60%;
                        border: 1px solid #c0c6cc !important;
                        resize: vertical;
                        border-radius: 2px;
                        float: left;
                    }
                    .zcwf_lblLeft .zcwf_col_lab {
                        width: 30%;
                        word-break: break-word;
                        padding: 0px 6px 0px;
                        margin-right: 10px;
                        margin-top: 5px;
                        float: left;
                        min-height: 1px;
                    }
                    .zcwf_lblLeft .zcwf_col_fld {
                        float: left;
                        width: 68%;
                        padding: 0px 6px 0px;
                        position: relative;
                        margin-top: 5px;
                    }
                    .zcwf_lblLeft .zcwf_privacy{padding: 6px;}
                    .zcwf_lblLeft .wfrm_fld_dpNn{display: none;}
                    .dIB{display: inline-block;}
                    .zcwf_lblLeft .zcwf_col_fld_slt {
                        width: 60%;
                        border: 1px solid #ccc;
                        background: #fff;
                        border-radius: 4px;
                        font-size: 12px;
                        float: left;
                        resize: vertical;
                        padding: 2px 5px;
                    }
                    .zcwf_lblLeft .zcwf_row:after, .zcwf_lblLeft .zcwf_col_fld:after {
                        content: '';
                        display: table;
                        clear: both;
                    }
                    .zcwf_lblLeft .zcwf_col_help {
                        float: left;
                        margin-left: 7px;
                        font-size: 12px;
                        max-width: 35%;
                        word-break: break-word;
                    }
                    .zcwf_lblLeft .zcwf_help_icon {
                        cursor: pointer;
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        background: #fff;
                        border: 1px solid #c0c6cc;
                        color: #c1c1c1;
                        text-align: center;
                        font-size: 11px;
                        line-height: 16px;
                        font-weight: bold;
                        border-radius: 50%;
                    }
                    .zcwf_lblLeft .zcwf_row {margin: 15px 0px;}
                    .zcwf_lblLeft .formsubmit {
                        margin-right: 5px;
                        cursor: pointer;
                        color: var(--baseColor);
                        font-size: 12px;
                    }
                    .zcwf_lblLeft .zcwf_privacy_txt {
                        width: 90%;
                        color: rgb(0, 0, 0);
                        font-size: 12px;
                        font-family: Arial;
                        display: inline-block;
                        vertical-align: top;
                        color: var(--baseColor);
                        padding-top: 2px;
                        margin-left: 6px;
                    }
                    .zcwf_lblLeft .zcwf_button {
                        font-size: 12px;
                        color: var(--baseColor);
                        border: 1px solid #c0c6cc;
                        padding: 3px 9px;
                        border-radius: 4px;
                        cursor: pointer;
                        max-width: 120px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .zcwf_lblLeft .zcwf_tooltip_over{
                        position: relative;
                    }
                    .zcwf_lblLeft .zcwf_tooltip_ctn{
                        position: absolute;
                        background: #dedede;
                        padding: 3px 6px;
                        top: 3px;
                        border-radius: 4px;word-break: break-word;
                        min-width: 100px;
                        max-width: 150px;
                        color: var(--baseColor);
                        z-index: 100;
                    }
                    .zcwf_lblLeft .zcwf_ckbox{
                        float: left;
                    }
                    .zcwf_lblLeft .zcwf_file{
                        width: 55%;
                        box-sizing: border-box;
                        float: left;
                    }
                    .clearB:after{
                        content:'';
                        display: block;
                        clear: both;
                    }
                    @media all and (max-width: 600px) {
                        .zcwf_lblLeft .zcwf_col_lab, .zcwf_lblLeft .zcwf_col_fld {
                            width: auto;
                            float: none !important;
                        }
                        .zcwf_lblLeft .zcwf_col_help {width: 40%;}
                    }
                    /* Updated style ends here */
                </style>
                
                <div class='zcwf_row '>
                    <div class='zcwf_col_fld'>
                        <input class='shadow-md w-full p-2 focus:ring focus:ring-blue-500 text-sm mb-2' type='text' id='First_Name' name='First Name' placeholder='First Name' maxlength='40' required></input>
                        <div class='zcwf_col_help'></div>
                    </div>
                </div>

                <div class='zcwf_row'>
                    <div class='zcwf_col_fld'>
                        <input class='shadow-md w-full p-2 focus:ring focus:ring-blue-500 text-sm mb-2' type='text' id='Last_Name' name='Last Name' placeholder='Last Name' maxlength='80' required></input>
                        <div class='zcwf_col_help'></div>
                    </div>
                </div>

                <div class='zcwf_row'>
                    <div class='zcwf_col_fld'>
                        <input class='shadow-md w-full p-2 focus:ring focus:ring-blue-500 text-sm mb-2' type='number' id='Mobile' name='Mobile' placeholder='Phone' maxlength='30' required></input>
                        <div class='zcwf_col_help'></div>
                    </div>
                </div>

                <div class='zcwf_row'>
                    <div class='zcwf_col_fld'>
                        <input class='shadow-md w-full p-2 focus:ring focus:ring-blue-500 text-sm mb-2' type='email' ftype='email' autocomplete='false' id='Email' name='Email' placeholder='Email' crmlabel='' maxlength='100' required></input>
                        <div class='zcwf_col_help'></div>
                    </div>
                </div>
                <div class='zcwf_row'>
                    <div class='zcwf_col_lab'></div>
                    <div class='zcwf_col_fld'> <button type='submit' id='formsubmit' class='bg-blue-500 text-white text-sm px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300' title='Submit'> Submit </button> <button type='reset' class='bg-gray text-gray-700 px-4 py-2 text-sm rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-300' name='reset' title='Reset'> Reset </button> </div>
                </div>
                
                <script>
                    function tooltipShow2662866000048987061(el){
                    	var tooltip = el.nextElementSibling;
                    	var tooltipDisplay = tooltip.style.display;
                    	if(tooltipDisplay == 'none'){
                    		var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
                    		for(i=0; i<allTooltip.length; i++){
                    			allTooltip[i].style.display='none';
                    		}
                    		tooltip.style.display = 'block';
                    	}else{
                    		tooltip.style.display='none';
                    	}
                    }
                    
                </script>
                <script type='text/javascript' id='VisitorTracking'>
                    var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:'siq808c9f0aec2179e3f6906ceb24906ee03d4fd55ab3a9515426e3ab8d00e568a0a8dd3011def5604c4779c2e3a5c0effa', values:{},ready:function(){}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.com/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);function trackVisitor(){try{if($zoho){var LDTuvidObj = document.forms['WebToLeads2662866000048987061']['LDTuvid'];if(LDTuvidObj){LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();}var firstnameObj = document.forms['WebToLeads2662866000048987061']['First Name'];if(firstnameObj){name = firstnameObj.value +' '+name;}$zoho.salesiq.visitor.name(name);var emailObj = document.forms['WebToLeads2662866000048987061']['Email'];if(emailObj){email = emailObj.value;$zoho.salesiq.visitor.email(email);}}} catch(e){}}
                </script> <!-- Do not remove this --- Analytics Tracking code starts -->
                <script id='wf_anal' src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=9268a182bbac587f29873950d578694e10598aefcaa03557eff8aa5292da5065f693253b6add5dcdd96e15337349e1d1gid5853fbaf3bcb8db501579f4548a2e9b0abccc381c80c9aecb01e430d624f06d9gid7746176a2e7d6c9248d47a7ef170397d19ae3c7444028d11261643c9702e50f3gid9f534c252c80ff9f6e28f32aa9b5a0d68959094a4e8a0ef84173b43bbcc61bd2&tw=757643bf2bf975c37ff8e960f1922ff1e4234a6798529a163148528b7093f0f5'></script><!-- Do not remove this --- Analytics Tracking code ends. -->
            </form>
        </div>
    </div>
</div>`;
interface LeadFormProps {
    onClose: () => void;
    // handleClose: () => void;

}

const LeadForm: React.FC<LeadFormProps> = ({onClose }) => {




    return (
        <div dangerouslySetInnerHTML={{ __html: zohoWebForm }} />


    );
};

export default LeadForm;