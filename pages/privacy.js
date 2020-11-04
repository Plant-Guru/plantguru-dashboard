
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '40px',
        textAlign: 'center',
        marginBottom: '10px'
    },
    titleSubText: {
        fontSize: '20px',
        textAlign: 'center',
        display: 'block',
        marginBottom: '20px'
    },
    titleContainer: {
        margin: '20px 0'
    },
    grayBackground: {
        backgroundColor: '#f0f0f0',
        padding: '20px'
    },
    ctaContainer: {
        padding: '250px 0',
        background: 'url(/greenhousefade.jpg) no-repeat center center fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    ctaMessage: {
        fontSize: '80px',
        marginBottom: '20px',
        backgroundImage: 'linear-gradient(90deg, #8BA910, #006f02)',
        "-webkit-background-clip": 'text',
        "-webkit-text-fill-color": 'transparent'
    },
}));

export default function Privacy() {
    const classes = useStyles();
    return (
        <Box>
            <Header />
            <Grid container>
                <Grid item xs={12} className={classes.grayBackground}>
                    <Container>
                        <h1>Privacy Policy for Plant Guru</h1>
                        <p>At Plant Guru, accessible from plant-guru.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Plant Guru and how we use it.</p>
                        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
                        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Plant Guru. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the <a href="https://www.privacypolicygenerator.info">Privacy Policy Generator</a> and the <a href="https://www.generateprivacypolicy.com/">Free Privacy Policy Generator</a>.</p>
                        <h2>Consent</h2>
                        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms. For our Terms and Conditions, please visit the <a href="https://www.privacypolicyonline.com/terms-conditions-generator/">Terms & Conditions Generator</a>.</p>
                        <h2>Information we collect</h2>
                        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                        <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                        <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
                        <h2>How we use your information</h2>
                        <p>We use the information we collect in various ways, including to:</p>
                        <ul>
                            <li>Provide, operate, and maintain our webste</li>
                            <li>Improve, personalize, and expand our webste</li>
                            <li>Understand and analyze how you use our webste</li>
                            <li>Develop new products, services, features, and functionality</li>
                            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes</li>
                            <li>Send you emails</li>
                            <li>Find and prevent fraud</li>
                        </ul>
                        <h2>Log Files</h2>
                        <p>Plant Guru follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
                        <h2>Cookies and Web Beacons</h2>
                        <p>Like any other website, Plant Guru uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
                        <p>For more general information on cookies, please read <a href="https://www.privacypolicies.com/blog/cookies/">"What Are Cookies"</a>.</p>
                        <h2 id="newsletter-privacy-policy">Newsletter Privacy Policy</h2>
                        <p>If you subscribe to our newsletter you submit the above personal information and give us the right to contact you by email. We use the data stored in the registration for the newsletter exclusively for our newsletter and do not pass this on.</p>
                        <p>If you unsubscribe from the newsletter - you will find the link in each newsletter at the bottom - then we delete all data that was saved with the registration for the newsletter.</p>
                        <h2 id="mailchimp-privacy-policy">MailChimp Privacy Policy</h2>
                        <p>We send out newsletters with MailChimp and use features of the MailChimp newsletter service of The Rocket Science Group, LLC, 675 Ponce de Leon Ave. NE, Suite 5000, Atlanta, GA 30308 USA to record newsletter subscriptions.</p>
                        <h3 id="general-information-about-mailchimp">General information about MailChimp</h3>
                        <p>Rocket Science Group LLC (MailChimp) maintains online platforms that enable our users to stay in touch with their subscribers, primarily via email. They allow users, to upload e-mail addresses, and other subscriber profile information, such as name, physical address, and other demographic information to the MailChimp database. This information is used to send emails and allow the use of certain other MailChimp features for these users. In accordance with the published privacy policy, MailChimp shares some information with third parties to provide and support the services that MailChimp provides to users. MailChimp also shares some information with third party advertisers to better understand users’ needs and interests so that more relevant content and targeted advertising can be provided to these users and other users.</p>
                        <h3 id="newsletter-sign-up">Newsletter Sign up</h3>
                        <p>When you sign up for our newsletter on our website, the data entered will be stored by MailChimp.</p>
                        <h3 id="deletion-of-your-data">Deletion of your data</h3>
                        <p>You can withdraw your consent to receive our newsletter at any time within the received e-mail by clicking on the link at the bottom. If you have unsubscribed by clicking on the unsubscribe link, your data will be deleted at MailChimp.</p>
                        <h3 id="newsletter-evaluation">Newsletter evaluation</h3>
                        <p>When you receive a newsletter via MailChimp, information such as IP address, browser type and e-mail program are stored to give us information about the performance of our newsletter. MailChimp can use the images in the HTML emails called Web Beacons (see&nbsp;<a href="https://kb.mailchimp.com/reports/about-open-tracking" rel="noreferrer" target="_blank">kb.mailchimp.com/reports/about-open-tracking</a> for&nbsp;details) to see if the email has arrived, whether it was opened and if links were clicked. All this information is stored on the servers of MailChimp, not on this website.</p>
                        <p>MailChimp is an active participant in the EU-US Privacy Shield Framework, which regulates the correct and secure transfer of personal data. More information can be found at&nbsp;<a href="https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG" rel="noreferrer" target="_blank">www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG</a>. You can read more about the use of cookies at MailChimp at&nbsp;<a href="https://mailchimp.com/legal/cookies/" rel="noreferrer" target="_blank">mailchimp.com/legal/cookies/</a>, for information on privacy at MailChimp (Privacy), please refer to&nbsp;<a href="https://mailchimp.com/legal/privacy/" rel="noreferrer" target="_blank">mailchimp.com/legal/privacy/</a>.</p>
                        <h2 id="mailchimp-data-processing-agreement">MailChimp data processing agreement</h2>
                        <p>We have a contract with MailChimp for Data Processing Addendum. This agreement secures your personal information and ensures that MailChimp adheres to applicable privacy policies and does not share your personal information with third parties. More information about this contract can be found at&nbsp;<a href="http://mailchimp.com/legal/forms/data-processing-agreement/" rel="noreferrer" target="_blank">mailchimp.com/legal/forms/data-processing-agreement/</a>.</p>
                        <h2>Advertising Partners Privacy Policies</h2>
                        <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Plant Guru.</p>
                        <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Plant Guru, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                        <p>Note that Plant Guru has no access to or control over these cookies that are used by third-party advertisers.</p>
                        <h2>Third Party Privacy Policies</h2>
                        <p>Plant Guru's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
                        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>
                        <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
                        <p>Under the CCPA, among other rights, California consumers have the right to:</p>
                        <p>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
                        <p>Request that a business delete any personal data about the consumer that a business has collected.</p>
                        <p>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
                        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
                        <h2>GDPR Data Protection Rights</h2>
                        <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                        <p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
                        <p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
                        <p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
                        <p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
                        <p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
                        <p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
                        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
                        <h2>Children's Information</h2>
                        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                        <p>Plant Guru does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                    </Container>
                </Grid>
                <Grid item xs={12} className={classes.ctaContainer}>
                    <Container>
                        <Typography variant="h2" className={classes.ctaMessage}>Stop waiting.<br/>Start growing.</Typography>
                    </Container>
                </Grid>
                <Footer />
            </Grid>
        </Box>
    );
}
