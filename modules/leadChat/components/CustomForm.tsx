import React, { useEffect } from 'react';

interface CustomFormProps {
    onClose: () => void;

}
const CustomForm:React.FC<CustomFormProps> = ({onClose}) => {
    useEffect(() => {
        // Adding script to enable/disable the submit button and track visitors
        const script = document.createElement('script');
        script.innerHTML = `
        function checkMandatory2662866000048987061() {
            var mndFileds = ['First Name', 'Last Name', 'Email', 'Mobile'];
            var fldLangVal = ['First Name', 'Last Name', 'Email', 'Mobile'];

            for (var i = 0; i < mndFileds.length; i++) {
                var fieldObj = document.forms['WebToLeads2662866000048987061'][mndFileds[i]];

                if (fieldObj) {
                var trimmedValue = fieldObj.value.trim();

                if (trimmedValue.length === 0) {
                    alert(fldLangVal[i] + ' cannot be empty.');
                    fieldObj.focus();
                    return false;
                } else if (fieldObj.nodeName === 'SELECT' && fieldObj.options[fieldObj.selectedIndex].value === '-None-') {
                    alert(fldLangVal[i] + ' cannot be none.');
                    fieldObj.focus();
                    return false;
                } else if (fieldObj.type === 'checkbox' && fieldObj.checked === false) {
                    alert('Please accept ' + fldLangVal[i]);
                    fieldObj.focus();
                    return false;
                }
                }
            }

            // Track visitor after mandatory checks pass
            trackVisitor();

            var urlparams = new URLSearchParams(window.location.search);

            if (urlparams.has('service') && urlparams.get('service') === 'smarturl') {
                var webform = document.getElementById('webform');
                var service = urlparams.get('service');
                var smarturlfield = document.createElement('input');
                smarturlfield.setAttribute('type', 'hidden');
                smarturlfield.setAttribute('value', service);
                smarturlfield.setAttribute('name', 'service');
                webform.appendChild(smarturlfield);
            }

            document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
        }


        function tooltipShow2662866000048987061(el) {
            var tooltip = el.nextElementSibling;
            var tooltipDisplay = tooltip.style.display;

            if (tooltipDisplay === 'none') {
                var allTooltips = document.getElementsByClassName('zcwf_tooltip_over');

                for (var i = 0; i < allTooltips.length; i++) {
                allTooltips[i].style.display = 'none';
                }

                tooltip.style.display = 'block';
            } else {
                tooltip.style.display = 'none';
            }
        }


        var $zoho = $zoho || {};
        $zoho.salesiq = $zoho.salesiq || { widgetcode: 'siq808c9f0aec2179e3f6906ceb24906ee03d4fd55ab3a9515426e3ab8d00e568a0a8dd3011def5604c4779c2e3a5c0effa', values: {}, ready: function () {} };
        var d = document;
        s = d.createElement('script');
        s.type = 'text/javascript';
        s.id = 'zsiqscript';
        s.defer = true;
        s.src = 'https://salesiq.zoho.com/widget';
        t = d.getElementsByTagName('script')[0];
        t.parentNode.insertBefore(s, t);

        function trackVisitor() {
            try {
                if ($zoho) {
                var LDTuvidObj = document.forms['WebToLeads2662866000048987061']['LDTuvid'];

                if (LDTuvidObj) {
                    LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();
                }

                var firstnameObj = document.forms['WebToLeads2662866000048987061']['First Name'];

                if (firstnameObj) {
                    name = firstnameObj.value + ' ' + name;
                }

                $zoho.salesiq.visitor.name(name);

                var emailObj = document.forms['WebToLeads2662866000048987061']['Email'];

                if (emailObj) {
                    email = emailObj.value;
                    $zoho.salesiq.visitor.email(email);
                }
                }
            } catch (e) {}
        }

    `;
        document.body.appendChild(script);

        // Cleanup script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleSubmit = (e:any) => {
        e.preventDefault();
       
    };

    return (
        <div id='crmWebToEntityForm' className='zcwf_lblLeft crmWebToEntityForm' style={{ backgroundColor: 'white', color: 'black', maxWidth: '600px' }}>
            <meta name='viewport' content='width=deviceWidth, initialScale=1.0' />
            <meta httpEquiv='contentType' content='text/html;charset=UTF-8' />
            <form id='webform' action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads2662866000048987061' method='POST' onSubmit={handleSubmit} accept-charset='UTF-8'>
                <input type='text' style={{ display: 'none' }} name='xnQsjsdp' defaultValue='1c44f082b3664c5b09e6f08ec4494a44faf9104bd9723a868c5f41c5a33f92da' />
                <input type='hidden' name='zc_gad' id='zc_gad' defaultValue='' />
                <input type='text' style={{ display: 'none' }} name='xmIwtLD' defaultValue='1fe121becc048df7fe400d4a05940021324ee37244c8602f50b1246b60b71c133c30294471fc9aecd900f89bb9c40ac3' />
                <input type='text' style={{ display: 'none' }} name='actionType' defaultValue='TGVhZHM=' />
                <input type='text' style={{ display: 'none' }} name='returnURL' defaultValue='null' />

                {/* Do not remove this code. */}
                <input type='text' style={{ display: 'none' }} id='ldeskuid' name='ldeskuid' />
                <input type='text' style={{ display: 'none' }} id='LDTuvid' name='LDTuvid' />
                {/* Do not remove this code. */}

                {/* Your existing style tag */}
                <style>
                    {/* ... (your existing styles) ... */}
                </style>

                <div className='zcwf_title' style={{ maxWidth: '600px', color: 'black', fontFamily: 'Arial' }}>Google Ads Leads</div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' style={{ fontSize: '12px', fontFamily: 'Arial' }}>
                        <label htmlFor='First_Name'>First Name<span style={{ color: 'red' }} /></label>
                    </div>
                    <div className='zcwf_col_fld'>
                        <input type='text' id='First_Name' name='First Name' maxLength={40} />
                        <div className='zcwf_col_help' />
                    </div>
                </div>

                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' style={{ fontSize: '12px', fontFamily: 'Arial' }}>
                        <label htmlFor='Last_Name'>Last Name<span style={{ color: 'red' }} /></label>
                    </div>
                    <div className='zcwf_col_fld'>
                        <input type='text' id='Last_Name' name='Last Name' maxLength={40} />
                        <div className='zcwf_col_help' />
                    </div>
                </div>

                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' style={{ fontSize: '12px', fontFamily: 'Arial' }}>
                        <label htmlFor='Mobile'>Mobile<span style={{ color: 'red' }} /></label>
                    </div>
                    <div className='zcwf_col_fld'>
                        <input type='text' id='Mobile' name='Mobile' maxLength={40} />
                        <div className='zcwf_col_help' />
                    </div>
                </div>

                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' style={{ fontSize: '12px', fontFamily: 'Arial' }}>
                        <label htmlFor='Email'>Email<span style={{ color: 'red' }} /></label>
                    </div>
                    <div className='zcwf_col_fld'>
                        <input type='text' id='Email' name='Email' maxLength={40} />
                        <div className='zcwf_col_help' />
                    </div>
                </div>

                

                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' />
                    <div className='zcwf_col_fld'>
                        <input type='submit' id='formsubmit' className='formsubmit zcwf_button' value='Submit' title='Submit' />
                        <input type='reset' className='zcwf_button' name='reset' value='Reset' title='Reset' />
                    </div>
                </div>

                {/* Do not remove this --- Analytics Tracking code starts */}
                {/* Do not remove this --- Analytics Tracking code ends. */}
            </form>
        </div>
    );
};

export default CustomForm;

function checkMandatory2662866000048987061() {
    throw new Error('Function not implemented.');
}

