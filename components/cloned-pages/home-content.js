import { normalizeCloneHtml } from "@/lib/clone-html";

const rawHtml = String.raw`

    <div id="main-wrapper">



        <div class="offcanvas-menu">
       <div class="offcanvas-menu-overlay"></div>
       <div class="container">
           <div class="row" style="margin-top:-1px;">
               <div class="col-md-12">
                   <div class="offcanvas-wrapper">
                       <div class="offcanvas-inner">
                           <a href="https://www.eductrl.com" class="logo">
                               <img src="https://www.eductrl.com/images/eductrl-logo.png" alt="EduCtrl" style="width: 60%;">
                           </a>
                           <p style="color:#000;margin-bottom: 0px;">EduCtrl is a feature-rich cloud-based software to
                               manage all aspects of Overseas Education Consultancy Business, Training/Coaching
                               Institutions.</p>
                           <div class="row">
                               <div class="col-md-12">
                                   <div class="contact-us">
                                       <div class="contact-icon">
                                           <i class="icon icon-phone3"></i>
                                       </div>
                                       <!-- End contact Icon -->
                                       <div class="contact-info">
                                           <h3>+8801518301098</h3>
                                           <p style="color:#000;">Give us a call</p>
                                       </div>
                                       <!-- End Contact Info -->
                                   </div>
                                   <!-- End Contact Us -->
                               </div>
                               <!-- End Col -->
                               <div class="col-md-12">
                                   <div class="contact-us">
                                       <div class="contact-icon">
                                           <i class="icon icon-envelope3"></i>
                                       </div>
                                       <!-- End contact Icon -->
                                       <div class="contact-info">
                                           <h3>info@eduanchor.ai</h3>
                                           <p style="color:#000;">Drop us email</p>
                                       </div>
                                       <!-- End Contact Info -->
                                   </div>
                                   <!-- End Contact Us -->
                               </div>
                               <!-- End Col -->
                           </div>
                           <!-- End Contact Row -->
                           <div class="footer-social-link">
                               <ul>
                                   <li><a target="_blank" href="https://fb.me/eductrlcrm"><i
                                               class="fa fa-facebook"></i></a></li>
                                   <li><a target="_blank" href="https://x.com/eductrlcrm" aria-label="X (Twitter)"><span class="x-logo-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></span></a></li>
                                   <li><a target="_blank" href="https://www.linkedin.com/company/eductrl/"><i
                                               class="fa fa-linkedin"></i></a></li>
                     <li><a href="https://www.instagram.com/eductrlcrm"><i class="fa fa-instagram"></i></a></li>

                                   <!-- <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                           <li><a href="#"><i class="fa fa-instagram"></i></a></li> -->
                               </ul>
                           </div>

                       </div>
                       <!-- Offcanvas inner end -->
                       <button class="menu-close-btn"><i class="fa fa-close" style="color:#000;"></i></button>
                   </div>
                   <!-- Offcanvas wrapper end -->
               </div>
               <!-- Col End -->
           </div>
           <!-- Row End -->
       </div>
       <!-- Container End -->
   </div>


   <div class="modal fade" id="enquiryModal" tabindex="-1" role="dialog" aria-labelledby="enquiryModalLabel"
       aria-hidden="true">
       <div class="modal-dialog" role="document">
           <div class="modal-content">
               <div class="modal-header">
                   <h5 class="modal-title" id="enquiryModalLabel" style="font-weight:500;">Request Demo</h5>
                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                   </button>
               </div>
               <div class="modal-body">
                   <div id="thankYouDiv" style="border-radius: 8px; display:none;">

                       <div class=" text-center">
                           <h2 class="modal-title w-100 mb-0"
                               style="font-family: 'Poppins', sans-serif; font-weight: 600; color: #333;">Thank You!
                           </h2>
                       </div>

                       <div class="p-4 text-center">
                           <p class="lead mb-4" style="font-size: 1.1rem; color: #555;">
                               Our team will be in touch shortly to arrange your personalized demo. In the meantime,
                               feel free to
                               explore our live software demo:
                           </p>
                           <a href="https://demo.eductrl.com/cn4" class="text-primary font-weight-bold" target="_blank"
                               style="font-size: 1rem;">https://demo.eductrl.com/cn4</a>
                           <div class="mt-4 text-start mx-auto" style="max-width: 400px;">
                               <p class="mb-2" style="font-size: 0.95rem;"><strong>Admin Login:</strong>
                                   admin@demo.com / 123456
                               </p>
                               <p class="mb-2" style="font-size: 0.95rem;"><strong>Student Login:</strong>
                                   student@demo.com /
                                   123456</p>
                               <p style="font-size: 0.95rem;"><strong>Staff Login:</strong> staff@demo.com / 123456</p>
                           </div>
                       </div>
                   </div>
                   <div id="formDiv">
                       <p>Share your details to access Software Demo</p>
                                              <form id="enquiry-form" class="contact-form" method="POST" action="#"
                           onsubmit="return false;">
                           <input type="hidden" name="_token" value="CxEwUn85CPRuRKB5NEfi3qldzPUo0rxvx5qooIFY">                           <div class="error-container"></div>
                           <div class="row">
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <input class="form-control" name="name" id="name" placeholder="Your Name *"
                                           type="text" required="">
                                   </div>
                               </div>
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <input class="form-control" name="business" id="business"
                                           placeholder="Business Name *" type="text" required="">
                                   </div>
                               </div>
                               <!-- Col end -->
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <input class="form-control form-email" name="email" id="email"
                                           placeholder="Email *" type="email" required="">
                                   </div>
                               </div>
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <input class="form-control form-phone" name="phone" id="phone"
                                           placeholder="Phone *" type="phone" required="">
                                   </div>
                               </div>
                               <!-- Col end -->
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <input class="form-control" name="city" id="city"
                                           placeholder="City *" type="text" required="">
                                   </div>
                               </div>
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <select class="form-control form-select" name="country" id="country" required="">
                                           <option value="">Country *</option>
                                                                                          <option value="Afghanistan">Afghanistan</option>
                                                                                          <option value="Albania">Albania</option>
                                                                                          <option value="Algeria">Algeria</option>
                                                                                          <option value="American Samoa">American Samoa</option>
                                                                                          <option value="Andorra">Andorra</option>
                                                                                          <option value="Angola">Angola</option>
                                                                                          <option value="Anguilla">Anguilla</option>
                                                                                          <option value="Antigua And Barbuda">Antigua And Barbuda</option>
                                                                                          <option value="Argentina">Argentina</option>
                                                                                          <option value="Armenia">Armenia</option>
                                                                                          <option value="Aruba">Aruba</option>
                                                                                          <option value="Australia">Australia</option>
                                                                                          <option value="Austria">Austria</option>
                                                                                          <option value="Azerbaijan">Azerbaijan</option>
                                                                                          <option value="Bahamas The">Bahamas The</option>
                                                                                          <option value="Bahrain">Bahrain</option>
                                                                                          <option value="Bangladesh">Bangladesh</option>
                                                                                          <option value="Barbados">Barbados</option>
                                                                                          <option value="Belarus">Belarus</option>
                                                                                          <option value="Belgium">Belgium</option>
                                                                                          <option value="Belize">Belize</option>
                                                                                          <option value="Benin">Benin</option>
                                                                                          <option value="Bermuda">Bermuda</option>
                                                                                          <option value="Bhutan">Bhutan</option>
                                                                                          <option value="Bolivia">Bolivia</option>
                                                                                          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                                          <option value="Botswana">Botswana</option>
                                                                                          <option value="Brazil">Brazil</option>
                                                                                          <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                                          <option value="Brunei">Brunei</option>
                                                                                          <option value="Bulgaria">Bulgaria</option>
                                                                                          <option value="Burkina Faso">Burkina Faso</option>
                                                                                          <option value="Burundi">Burundi</option>
                                                                                          <option value="Cambodia">Cambodia</option>
                                                                                          <option value="Cameroon">Cameroon</option>
                                                                                          <option value="Canada">Canada</option>
                                                                                          <option value="Cape Verde">Cape Verde</option>
                                                                                          <option value="Cayman Islands">Cayman Islands</option>
                                                                                          <option value="Central African Republic">Central African Republic</option>
                                                                                          <option value="Chad">Chad</option>
                                                                                          <option value="Chile">Chile</option>
                                                                                          <option value="China">China</option>
                                                                                          <option value="Christmas Island">Christmas Island</option>
                                                                                          <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                                                          <option value="Colombia">Colombia</option>
                                                                                          <option value="Comoros">Comoros</option>
                                                                                          <option value="Cook Islands">Cook Islands</option>
                                                                                          <option value="Costa Rica">Costa Rica</option>
                                                                                          <option value="Cote D&#039;Ivoire (Ivory Coast)">Cote D&#039;Ivoire (Ivory Coast)</option>
                                                                                          <option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option>
                                                                                          <option value="Cuba">Cuba</option>
                                                                                          <option value="Cyprus">Cyprus</option>
                                                                                          <option value="Czech Republic">Czech Republic</option>
                                                                                          <option value="Democratic Republic Of The Congo">Democratic Republic Of The Congo</option>
                                                                                          <option value="Denmark">Denmark</option>
                                                                                          <option value="Djibouti">Djibouti</option>
                                                                                          <option value="Dominica">Dominica</option>
                                                                                          <option value="Dominican Republic">Dominican Republic</option>
                                                                                          <option value="East Timor">East Timor</option>
                                                                                          <option value="Ecuador">Ecuador</option>
                                                                                          <option value="Egypt">Egypt</option>
                                                                                          <option value="El Salvador">El Salvador</option>
                                                                                          <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                                                          <option value="Eritrea">Eritrea</option>
                                                                                          <option value="Estonia">Estonia</option>
                                                                                          <option value="Ethiopia">Ethiopia</option>
                                                                                          <option value="External Territories of Australia">External Territories of Australia</option>
                                                                                          <option value="Falkland Islands">Falkland Islands</option>
                                                                                          <option value="Faroe Islands">Faroe Islands</option>
                                                                                          <option value="Fiji Islands">Fiji Islands</option>
                                                                                          <option value="Finland">Finland</option>
                                                                                          <option value="France">France</option>
                                                                                          <option value="French Guiana">French Guiana</option>
                                                                                          <option value="French Polynesia">French Polynesia</option>
                                                                                          <option value="Gabon">Gabon</option>
                                                                                          <option value="Gambia The">Gambia The</option>
                                                                                          <option value="Georgia">Georgia</option>
                                                                                          <option value="Germany">Germany</option>
                                                                                          <option value="Ghana">Ghana</option>
                                                                                          <option value="Gibraltar">Gibraltar</option>
                                                                                          <option value="Greece">Greece</option>
                                                                                          <option value="Greenland">Greenland</option>
                                                                                          <option value="Grenada">Grenada</option>
                                                                                          <option value="Guadeloupe">Guadeloupe</option>
                                                                                          <option value="Guam">Guam</option>
                                                                                          <option value="Guatemala">Guatemala</option>
                                                                                          <option value="Guernsey and Alderney">Guernsey and Alderney</option>
                                                                                          <option value="Guinea">Guinea</option>
                                                                                          <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                                                          <option value="Guyana">Guyana</option>
                                                                                          <option value="Haiti">Haiti</option>
                                                                                          <option value="Honduras">Honduras</option>
                                                                                          <option value="Hong Kong S.A.R.">Hong Kong S.A.R.</option>
                                                                                          <option value="Hungary">Hungary</option>
                                                                                          <option value="Iceland">Iceland</option>
                                                                                          <option value="India">India</option>
                                                                                          <option value="Indonesia">Indonesia</option>
                                                                                          <option value="Iran">Iran</option>
                                                                                          <option value="Iraq">Iraq</option>
                                                                                          <option value="Ireland">Ireland</option>
                                                                                          <option value="Israel">Israel</option>
                                                                                          <option value="Italy">Italy</option>
                                                                                          <option value="Jamaica">Jamaica</option>
                                                                                          <option value="Japan">Japan</option>
                                                                                          <option value="Jersey">Jersey</option>
                                                                                          <option value="Jordan">Jordan</option>
                                                                                          <option value="Kazakhstan">Kazakhstan</option>
                                                                                          <option value="Kenya">Kenya</option>
                                                                                          <option value="Kiribati">Kiribati</option>
                                                                                          <option value="Korea North">Korea North</option>
                                                                                          <option value="Korea South">Korea South</option>
                                                                                          <option value="Kuwait">Kuwait</option>
                                                                                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                                                          <option value="Laos">Laos</option>
                                                                                          <option value="Latvia">Latvia</option>
                                                                                          <option value="Lebanon">Lebanon</option>
                                                                                          <option value="Lesotho">Lesotho</option>
                                                                                          <option value="Liberia">Liberia</option>
                                                                                          <option value="Libya">Libya</option>
                                                                                          <option value="Liechtenstein">Liechtenstein</option>
                                                                                          <option value="Lithuania">Lithuania</option>
                                                                                          <option value="Luxembourg">Luxembourg</option>
                                                                                          <option value="Macau S.A.R.">Macau S.A.R.</option>
                                                                                          <option value="Macedonia">Macedonia</option>
                                                                                          <option value="Madagascar">Madagascar</option>
                                                                                          <option value="Malawi">Malawi</option>
                                                                                          <option value="Malaysia">Malaysia</option>
                                                                                          <option value="Maldives">Maldives</option>
                                                                                          <option value="Mali">Mali</option>
                                                                                          <option value="Malta">Malta</option>
                                                                                          <option value="Man (Isle of)">Man (Isle of)</option>
                                                                                          <option value="Marshall Islands">Marshall Islands</option>
                                                                                          <option value="Martinique">Martinique</option>
                                                                                          <option value="Mauritania">Mauritania</option>
                                                                                          <option value="Mauritius">Mauritius</option>
                                                                                          <option value="Mayotte">Mayotte</option>
                                                                                          <option value="Mexico">Mexico</option>
                                                                                          <option value="Micronesia">Micronesia</option>
                                                                                          <option value="Moldova">Moldova</option>
                                                                                          <option value="Monaco">Monaco</option>
                                                                                          <option value="Mongolia">Mongolia</option>
                                                                                          <option value="Montserrat">Montserrat</option>
                                                                                          <option value="Morocco">Morocco</option>
                                                                                          <option value="Mozambique">Mozambique</option>
                                                                                          <option value="Myanmar">Myanmar</option>
                                                                                          <option value="Namibia">Namibia</option>
                                                                                          <option value="Nauru">Nauru</option>
                                                                                          <option value="Nepal">Nepal</option>
                                                                                          <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                                                          <option value="Netherlands The">Netherlands The</option>
                                                                                          <option value="New Caledonia">New Caledonia</option>
                                                                                          <option value="New Zealand">New Zealand</option>
                                                                                          <option value="Nicaragua">Nicaragua</option>
                                                                                          <option value="Niger">Niger</option>
                                                                                          <option value="Nigeria">Nigeria</option>
                                                                                          <option value="Niue">Niue</option>
                                                                                          <option value="Norfolk Island">Norfolk Island</option>
                                                                                          <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                                                          <option value="Norway">Norway</option>
                                                                                          <option value="Oman">Oman</option>
                                                                                          <option value="Pakistan">Pakistan</option>
                                                                                          <option value="Palau">Palau</option>
                                                                                          <option value="Palestinian Territory Occupied">Palestinian Territory Occupied</option>
                                                                                          <option value="Panama">Panama</option>
                                                                                          <option value="Papua new Guinea">Papua new Guinea</option>
                                                                                          <option value="Paraguay">Paraguay</option>
                                                                                          <option value="Peru">Peru</option>
                                                                                          <option value="Philippines">Philippines</option>
                                                                                          <option value="Poland">Poland</option>
                                                                                          <option value="Portugal">Portugal</option>
                                                                                          <option value="Puerto Rico">Puerto Rico</option>
                                                                                          <option value="Qatar">Qatar</option>
                                                                                          <option value="Republic Of The Congo">Republic Of The Congo</option>
                                                                                          <option value="Reunion">Reunion</option>
                                                                                          <option value="Romania">Romania</option>
                                                                                          <option value="Russia">Russia</option>
                                                                                          <option value="Rwanda">Rwanda</option>
                                                                                          <option value="Saint Helena">Saint Helena</option>
                                                                                          <option value="Saint Kitts And Nevis">Saint Kitts And Nevis</option>
                                                                                          <option value="Saint Lucia">Saint Lucia</option>
                                                                                          <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                                                          <option value="Saint Vincent And The Grenadines">Saint Vincent And The Grenadines</option>
                                                                                          <option value="Samoa">Samoa</option>
                                                                                          <option value="San Marino">San Marino</option>
                                                                                          <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                                                          <option value="Saudi Arabia">Saudi Arabia</option>
                                                                                          <option value="Senegal">Senegal</option>
                                                                                          <option value="Serbia">Serbia</option>
                                                                                          <option value="Seychelles">Seychelles</option>
                                                                                          <option value="Sierra Leone">Sierra Leone</option>
                                                                                          <option value="Singapore">Singapore</option>
                                                                                          <option value="Slovakia">Slovakia</option>
                                                                                          <option value="Slovenia">Slovenia</option>
                                                                                          <option value="Smaller Territories of the UK">Smaller Territories of the UK</option>
                                                                                          <option value="Solomon Islands">Solomon Islands</option>
                                                                                          <option value="Somalia">Somalia</option>
                                                                                          <option value="South Africa">South Africa</option>
                                                                                          <option value="South Sudan">South Sudan</option>
                                                                                          <option value="Spain">Spain</option>
                                                                                          <option value="Sri Lanka">Sri Lanka</option>
                                                                                          <option value="Sudan">Sudan</option>
                                                                                          <option value="Suriname">Suriname</option>
                                                                                          <option value="Svalbard And Jan Mayen Islands">Svalbard And Jan Mayen Islands</option>
                                                                                          <option value="Swaziland">Swaziland</option>
                                                                                          <option value="Sweden">Sweden</option>
                                                                                          <option value="Switzerland">Switzerland</option>
                                                                                          <option value="Syria">Syria</option>
                                                                                          <option value="Taiwan">Taiwan</option>
                                                                                          <option value="Tajikistan">Tajikistan</option>
                                                                                          <option value="Tanzania">Tanzania</option>
                                                                                          <option value="Thailand">Thailand</option>
                                                                                          <option value="Togo">Togo</option>
                                                                                          <option value="Tokelau">Tokelau</option>
                                                                                          <option value="Tonga">Tonga</option>
                                                                                          <option value="Trinidad And Tobago">Trinidad And Tobago</option>
                                                                                          <option value="Tunisia">Tunisia</option>
                                                                                          <option value="Turkey">Turkey</option>
                                                                                          <option value="Turkmenistan">Turkmenistan</option>
                                                                                          <option value="Turks And Caicos Islands">Turks And Caicos Islands</option>
                                                                                          <option value="Tuvalu">Tuvalu</option>
                                                                                          <option value="Uganda">Uganda</option>
                                                                                          <option value="Ukraine">Ukraine</option>
                                                                                          <option value="United Arab Emirates">United Arab Emirates</option>
                                                                                          <option value="United Kingdom">United Kingdom</option>
                                                                                          <option value="United States">United States</option>
                                                                                          <option value="Uruguay">Uruguay</option>
                                                                                          <option value="Uzbekistan">Uzbekistan</option>
                                                                                          <option value="Vanuatu">Vanuatu</option>
                                                                                          <option value="Venezuela">Venezuela</option>
                                                                                          <option value="Vietnam">Vietnam</option>
                                                                                          <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                                                                          <option value="Virgin Islands (US)">Virgin Islands (US)</option>
                                                                                          <option value="Wallis And Futuna Islands">Wallis And Futuna Islands</option>
                                                                                          <option value="Western Sahara">Western Sahara</option>
                                                                                          <option value="Yemen">Yemen</option>
                                                                                          <option value="Yugoslavia">Yugoslavia</option>
                                                                                          <option value="Zambia">Zambia</option>
                                                                                          <option value="Zimbabwe">Zimbabwe</option>
                                                                                  </select>
                                   </div>
                               </div>
                               <!-- Col end -->
                               <div class="col-lg-12">
                                   <div class="form-group">
                                       <select class="form-control form-select" name="interested_in"
                                           id="interested_in" required="">
                                           <option value="">Interested In *</option>
                                           <option value="Consultancy">Consultancy CRM</option>
                                           <option value="Coaching">Coaching CRM</option>
                                           
                                       </select>
                                   </div>
                               </div>

                               <div class="col-lg-12">
                                   <div class="form-group">
                                       <textarea class="form-control" name="message" id="message" placeholder="Enquiry or message" rows="3"></textarea>
                                   </div>
                               </div>
                               <!-- Col 12 end -->

                           </div>
                           <!-- Form row end -->
                           <div class="text-center">
                               <button id="enquiry-form-submit" class="btn btn-dark tw-mt-10">Submit</button>
                           </div>
                       </form>
                   </div>
               </div>
           </div>
       </div>

   </div>
        <div class="tw-top-bar tw-top-bar-angle bg-offwhite mbv-none">
      <div class="container">
         <div class="row">
            <div class="col-md-8 text-left">
               <div class="top-contact-info">                 
                  <span><i class="icon icon-phone3"></i>+8801518301098</span>
                <span><i class="icon icon-envelope"></i>info@eduanchor.ai</span>
               </div>
            </div>
            <!-- Col End -->
            <div class="col-md-4 ml-auto text-right">
               <div class="top-social-links">
                  <span>Follow us:</span>
                  <a target="_blank" href="https://fb.me/eductrlcrm"><i class="fa fa-facebook"></i></a>
                  <a target="_blank" href="https://x.com/eductrlcrm" aria-label="X (Twitter)"><span class="x-logo-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></span></a>
                  <a target="_blank" href="https://www.linkedin.com/company/eductrl/"><i class="fa fa-linkedin"></i></a>

                  <!-- <a href="#"><i class="fa fa-google-plus"></i></a> -->
                  <a href="https://www.instagram.com/eductrlcrm"><i class="fa fa-instagram"></i></a> 
               </div>
            </div>
            <!-- Col End -->
         </div>
         <!-- Row End -->
      </div>
      <!-- Container End -->
   </div>

        <header>
    

    <div class="tw-header">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-new-blue p-2">
                <a class="navbar-brand tw-nav-brand header-size" href="https://www.eductrl.com">
                    <img src="https://www.eductrl.com/images/eductrl-logo.png" alt="EduCtrl" class="header-logo-size">
                </a>
                <!-- End of Navbar Brand -->
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- End of Navbar toggler -->
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link p-2" href="https://www.eductrl.com">Home</a></li>

                        <li class="nav-item dropdown">
                            <a class="nav-link p-2" href="#" data-toggle="dropdown">
                                Products
                                <span class="tw-indicator"><i class="fa fa-angle-down"></i></span>
                            </a>
                            <ul id="tw-megamenu" class="dropdown-menu tw-mega-menu p-4" style="min-width: 500px;">
                                <div class="row justify-content-start p-2">
                                    <div class="col-6 mb-3 hover-scale p-3">
                                        <a href="https://www.eductrl.com/consultancy">
                                            <p class="font-weight-bold m-0 p-0" style="font-size:15px;">Consultancy CRM</p>
                                            <p class="text-muted p-0 m-0 mt-2">CRM software for study abroad consultancy</p>
                                        </a>
                                    </div>
                                    <div class="col-6 mb-3 hover-scale p-3">
                                        <a href="https://www.eductrl.com/coaching">
                                            <p class="font-weight-bold m-0 p-0" style="font-size:15px;">Coaching CRM</p>
                                            <p class="text-muted p-0 m-0 mt-2">Coaching institute management software</p>
                                        </a>
                                    </div>
                                    <div class="col-6 hover-scale p-3">
                                        <a href="https://www.eductrl.com/eductrl-cms">
                                            <p class="font-weight-bold m-0 p-0" style="font-size:15px;">EduCtrl CMS</p>
                                            <p class="text-muted p-0 m-0 mt-2">Website builder for study abroad agency</p>
                                        </a>
                                    </div>
                                </div>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link p-2" href="https://www.eductrl.com/pricing">Pricing</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link p-2" href="#" data-toggle="dropdown">
                                Resources
                                <span class="tw-indicator"><i class="fa fa-angle-down"></i></span>
                            </a>
                            <ul id="tw-megamenu" class="dropdown-menu tw-mega-menu p-4" style="min-width: 350px;">
                                <div class="row justify-content-start p-2">
                                    <div class="col-12 mb-3 hover-scale p-3">
                                        <a href="https://www.eductrl.com/knowledgebase">
                                            <p class="font-weight-bold m-0 p-0" style="font-size:15px;">Knowledgebase</p>
                                            <p class="text-muted p-0 m-0 mt-2">
                                                Help articles and guides to use EduCtrl CRM
                                            </p>
                                        </a>
                                    </div>
                                    <div class="col-12 mb-3 hover-scale p-3">
                                        <a href="https://www.eductrl.com/blog">
                                            <p class="font-weight-bold m-0 p-0" style="font-size:15px;">Blog</p>
                                            <p class="text-muted p-0 m-0 mt-2">
                                                Insights and updates on CRM and the education industry
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </ul>
                        </li>

                        <li class="nav-item"><a class="nav-link p-2" href="https://www.eductrl.com/about">About Us</a></li>
                        <li class="nav-item"><a class="nav-link p-2" href="https://www.eductrl.com/contact">Contact</a></li>

                        <li class="text-center mt-2 d-md-none d-sm-block">
                            <button class="btn btn-dark" data-toggle="modal" data-target="#enquiryModal"
                                style="padding: 10px 20px;margin-right: 25px;">Request Free Demo</button><br>
                            <hr>
                            <div class="d-flex flex-column align-items-center">
                                <div class="contact-buttons justify-content-center mb-2 nav-link">
                                    <a href="tel:+8801518301098" class="mx-1 p-1 text-dark" title="Call">
                                        <b class="fa fa-phone"></b> +8801518301098
                                    </a>
                                    <a href="mailto:info@eduanchor.ai" class="text-dark p-1 mx-1" title="Email">
                                        <b class="fa fa-envelope"></b> info@eduanchor.ai
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="tw-offcanvas-menu d-none d-md-block">
                    <button class="btn btn-dark mobile-display-none" data-toggle="modal" data-target="#enquiryModal"
                        style="padding: 10px 20px;margin-right: 25px;">Free Demo</button>
                    <div class="tw-menu-bar inline-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    <style>
        .offer-bar {
            background: linear-gradient(90deg, #7B2FF7, #7807f1ff);
            font-weight: 600;
            font-size: 0.95rem;
            position: relative;
            z-index: 1050;
        }

        .offer-btn {
            background-color: #ffca2c;
            border-radius: 25px;
            padding: 4px 12px;
            color: #000 !important;
            text-decoration: none;
            font-weight: 700;
            margin-left: 8px;
            transition: all 0.3s ease;
        }

        .offer-btn:hover {
            background-color: #ffd84a;
            transform: scale(1.05);
        }

        .hover-scale {
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-scale:hover {
            box-shadow: 0 2px 5px rgba(59, 58, 58, 0.2);
            background-color: #f8f9fa;
            border-left: 3px solid #525252;
            border-radius: 5px;
        }

        #tw-megamenu {
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background: #fff;
        }
    </style>
</header>

        
<!-- Start hero section -->

<div class="tw-hero-slider">
    <div class="slider-2">
        <div class="slider-wrapper d-table">
            <div class="slider-inner d-table-cell">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-md-7 mt-3">
                            <div class="slider-content">
                                <h1><span>All-in-One CRM</span> for Study Abroad Agencies</h1>
                                <p>Easily manage your leads, student applications, and follow-ups in one place. Our system helps you handle the full admission process smoothly and save time.
</p>
                                <a href="https://www.eductrl.com/consultancy" class="btn btn-dark" style="margin-top: 10px;">See Features</a>
                                <a href="#" class="btn btn-outline" data-toggle="modal" data-target="#enquiryModal" style="margin-top: 10px;">Request Demo</a>
                            </div>
                        </div>
                        <!-- Col end -->
                        <div class="col-md-5 mt-3">
                            <img src="https://www.eductrl.com/images/hero1.png" alt="" class="img-fluid slider-img w-100" fetchpriority="high" width="600" height="450">
                        </div>

                        <!-- <div class="col-12 mt-4 text-center">
                            <a href="https://www.eductrl.com/offers" style="font-size: 18px; border-radius: 20px;" class="bg-danger text-white py-3 px-5">
                                📢 Diwali OFFER!! Get 10% Off 🎁💥🎉
                            </a>
                        </div> -->
                        <!-- col end -->
                    </div>
                    <!-- Row End -->
                </div>
                <!-- Container End -->
            </div>
            <!-- Slider Inner End -->
        </div>
        <!-- Slider Wrapper End -->
    </div>
    <!-- Slider 2 end -->
</div>
<!-- End hero section -->
<section id="tw-service" class="tw-service py-0">
    <div class="container">
        <div class="row text-center">
            <div class="col section-heading mb-0 wow fadeInUp" data-wow-duration="0.6s" data-wow-delay=".1s">
                <img src="https://www.eductrl.com/images/whatsnew40.png" alt="" class="img-fluid slider-img w-100" loading="lazy">
                </div>
            </div>
        </div>
</section>
<section id="tw-service" class="tw-service ">
    <div class="container">
        <div class="row text-center">
            <div class="col section-heading">
                <h2 class="wow fadeInUp" data-wow-duration="0.6s" data-wow-delay=".1s">
                    <span>Smart CRM for Study Abroad</span>
                    <small>This CRM is built for education consultants to manage their daily tasks more easily.
From handling leads to tracking applications and supporting students, everything is in one system. Work faster, stay organized, and grow your business.</small>
                </h2>
                <span class="animate-border ml-auto mr-auto tw-mt-20"></span>
            </div>
            <!-- Title Col End -->
        </div>
        <!-- Title Row End -->
        <div class="row">
            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-1 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Student%20Management.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Student Management</h3>
                        <p>Keep all student information in one place. Track profiles, course interests, documents, and application progress.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service Content end -->
                </div>
                <!-- Service box end -->
            </div>
            <!-- Col End -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 44px 60px;">
                    <div class="service-icon service-icon-bg-6 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Student%20Documents.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service Icon end-->
                    <div class="service-content">
                        <h3>Documents</h3>
                        <p>Allow students to upload documents easily. Staff can view and download files anytime with just one click.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service Content end -->
                </div>
                <!-- Service box end-->
            </div>
            <!-- Col end -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-3 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/University%20Applications.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service Icon End -->
                    <div class="service-content">
                        <h3>University Applications</h3>
                        <p>Create and manage applications based on student choices. Track status, communicate, and control the full workflow.
</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service content end -->
                </div>
                <!-- Service box End -->
            </div>
            <!-- Col end -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2.2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-1 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Lead%20Management.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Lead Management</h3>
                        <p>Track new leads, assign tasks, and follow up on time. Send updates and manage communication easily.
</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service Content end -->
                </div>
                <!-- Service box end -->
            </div>
            <!-- Col End -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2.2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-1 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Agents.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Agents Management</h3>
                        <p>Manage your agents and their activities. Track student entries, documents, and commission details.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service Content end -->
                </div>
                <!-- Service box end -->
            </div>
            <!-- Col End -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2.2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-1 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Course%20Finder.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Course Finder</h3>
                        <p>Organize university courses and categories. Search, add, and manage course data quickly.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service Content end -->
                </div>
                <!-- Service box end -->
            </div>
            <!-- Col End -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2.2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-1 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Invoices.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Invoice System</h3>
                        <p>Students can update their profile, upload documents, and check their application status anytime.
</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service Content end -->
                </div>
                <!-- Service box end -->
            </div>
            <!-- Col End -->


            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-4 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Self%20Service%20Portal.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Student Portal</h3>
                        <p>Students can update their profile, upload documents, and check their application status anytime.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service content end -->
                </div>
                <!-- Service Box end -->
            </div>
            <!-- Col end -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1.8s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-5 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Form%20Builder.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Form Builder</h3>
                        <p>Create custom forms and collect leads from your website. Share links or embed forms easily.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service content end -->
                </div>
                <!-- Service box end -->
            </div>

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2.4s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-2 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Notifications.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Notifications</h3>
                        <p>Send automatic updates via email, SMS, or WhatsApp to keep students and staff informed.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service content end -->
                </div>
                <!-- Service box End -->
            </div>
            <!-- Col End -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2.6s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-3 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Chat.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service Icon End -->
                    <div class="service-content">
                        <h3>Chat System</h3>
                        <p>Chat with team members and students in real-time. Improve communication and teamwork.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service content end -->
                </div>
                <!-- Service box End -->
            </div>
            <!-- Col end -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2.6s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-3 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Import%20Data.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service Icon End -->
                    <div class="service-content">
                        <h3>Data Import</h3>
                        <p>Import your old data easily into the system. Export data anytime when needed.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service content end -->
                </div>
                <!-- Service box End -->
            </div>
            <!-- Col end -->


        </div>
        <!-- Row end -->
        <div class="row">
            <div class="col-md-12 text-center"><a href="https://www.eductrl.com/consultancy" class="btn btn-dark btn-lg tw-mt-80">View All Features</a></div>
        </div>
    </div>
    <!-- container -->
</section>
<!-- Tw Service End -->


<!--  new section -->

<section id="tw-service" class="tw-service">
    <div class="container">
        <div class="row text-center">
            <div class="col section-heading">
                <h2 class="wow fadeInUp" data-wow-duration="0.6s" data-wow-delay=".1s">
                    <span>Coaching Management</span> Software
                    <small>Manage your coaching center easily. Handle student fees, classes, and online exams without hassle. Save time and grow your training business faster.
</small>
                </h2>
                <span class="animate-border ml-auto mr-auto tw-mt-20"></span>
            </div>
            <!-- Title Col End -->
        </div>
        <!-- Title Row End -->
        <div class="row">

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-2 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Coaching%20Batch%20Management.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Training Institute CRM</h3>
                        <p>Run your coaching business with ease. Manage student fees, online exams, and batch schedules from one platform. Save time, stay organized, and grow your training institute more efficiently.
 </p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service content end -->
                </div>
                <!-- Service box End -->
            </div>
            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-2 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Coaching%20Batch%20Management.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Coaching Batch Management</h3>
                        <p>Create and manage batches easily. Set class type (online/offline), schedule, and assign trainers. Add students to batches without hassle.
</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service content end -->
                </div>
                <!-- Service box End -->
            </div>
            <!-- Col End -->


            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-1 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Student%20Fees.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Student Fees</h3>
                        <p>Manage student payments in one place. Track fees, record payments, and generate invoices. Download or share receipts anytime.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                             <i class="fa fa-angle-right"></i>
                          </a> -->
                    </div>
                    <!-- Service Content end -->
                </div>
                <!-- Service box end -->
            </div>
            <!-- Col End -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 44px 60px;">
                    <div class="service-icon service-icon-bg-6 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Student%20Attendance.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service Icon end-->
                    <div class="service-content">
                        <h3>Student Attendance</h3>
                        <p>Update and monitor student attendance easily. Trainers can mark attendance, and staff can review records. Send alerts for absences when needed.
</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                             <i class="fa fa-angle-right"></i>
                          </a> -->
                    </div>
                    <!-- Service Content end -->
                </div>
                <!-- Service box end-->
            </div>
            <!-- Col end -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-3 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Student%20Panel.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service Icon End -->
                    <div class="service-content">
                        <h3>Student Panel</h3>
                        <p>Students get their own dashboard to manage everything. Check progress, attend online exams, and view results anytime.
</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                             <i class="fa fa-angle-right"></i>
                          </a> -->
                    </div>
                    <!-- Service content end -->
                </div>
                <!-- Service box End -->
            </div>
            <!-- Col end -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2.2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-1 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Trainer%20Panel.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Trainer Panel</h3>
                        <p>Trainers can track student progress and attendance. Communicate with students through chat or messages - group or individual.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                             <i class="fa fa-angle-right"></i>
                          </a> -->
                    </div>
                    <!-- Service Content end -->
                </div>
                <!-- Service box end -->
            </div>
            <!-- Col End -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2.2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-1 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Online%20Courses.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Online Courses</h3>
                        <p>Provide access to recorded courses for students. Students can purchase and watch lessons anytime, from anywhere.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                             <i class="fa fa-angle-right"></i>
                          </a> -->
                    </div>
                    <!-- Service Content end -->
                </div>
                <!-- Service box end -->
            </div>
            <!-- Col End -->

        </div>
        <!-- Row end -->
        <div class="row">
            <div class="col-md-12 text-center"><a href="https://www.eductrl.com/coaching" class="btn btn-dark btn-lg tw-mt-80">View All Features</a></div>
        </div>
    </div>
    <!-- container -->
</section>

<!-- end new section -->


<section id="tw-blog" class="tw-blog">
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <div class="section-heading">
                    <h2 style="margin-bottom:30px;">
                        EduAnchor CRM Overview
                    </h2>
                    <p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/_UgL2qG-W1U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </p>
                </div>
                <!-- Heading End -->
            </div>
            <!-- Col End -->
        </div>
        <div class="row">
            <div class="col text-center">
                <div class="section-heading">
                    <h2>
                        CRM Solutions for Education <span>Businesses</span>
                    </h2>
                    <p>Discover how our smart CRM system can help you manage and grow your education business more effectively.
</p>
                    <span class="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40"></span>
                </div>
                <!-- Heading End -->
            </div>
            <!-- Col End -->
        </div>
        <!-- End Row 1 -->
        <div class="row wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.2s; animation-name: fadeInUp;">
            <div class="col-lg-6 col-md-12">
                <div class="tw-latest-post">
                    <div class="latest-post-media text-center">
                        <img src="https://www.eductrl.com/images/news/abroad.jpg" alt="" class="img-fluid" loading="lazy">
                    </div>
                    <!-- End Latest Post Media -->
                    <div class="post-body">
                        <div class="post-info" style="margin-left: 0px;text-align: center;">
                            <h3 class="post-title">Study Abroad Consultancy CRM</h3>
                            <div class="entry-content">
                                <p>
                                    A complete solution for overseas education consultants. Manage student applications, documents, and communication in one place. Reduce manual work and improve efficiency.
                                </p>
                                <a href="https://www.eductrl.com/blog/study-abroad-consultancy-crm-eductrl" class="tw-readmore">Read More <i class="fa fa-angle-right"></i></a>
                            </div>
                            <!-- End Entry Content -->
                        </div>
                        <!-- End Post info -->
                    </div>
                    <!-- End Post Body -->
                </div>
                <!-- End Tw Latest Post -->
            </div>
            <!-- End Col -->
            <div class="col-lg-6 col-md-12">
                <div class="tw-latest-post">
                    <div class="latest-post-media text-center">
                        <img src="https://www.eductrl.com/images/news/training.jpg" alt="" class="img-fluid" loading="lazy">
                    </div>
                    <!-- End Latest Post Media -->
                    <div class="post-body">
                        <div class="post-info" style="margin-left: 0px;text-align: center;">
                            <h3 class="post-title">Training/Coaching Institute CRM</h3>
                            <div class="entry-content">
                                <p>
                                    Designed for coaching centers and training institutes. Manage students, classes, and daily operations with ease. Stay organized and improve your overall performance.
                                </p>
                                <a href="https://www.eductrl.com/blog/training-coaching-institute-crm-eductrl" class="tw-readmore">Read More <i class="fa fa-angle-right"></i></a>
                            </div>
                            <!-- End Entry Content -->
                        </div>
                        <!-- End Post info -->
                    </div>
                    <!-- End Post Body -->
                </div>
                <!-- End Tw Latest Post -->
            </div>
            <!-- End Col -->

            <!--   <div class="col-md-12 text-center wow zoomIn" data-wow-duration="1s" data-wow-delay="1s" style="visibility: visible; animation-duration: 1s; animation-delay: 1s; animation-name: zoomIn;"><a href="#" class="btn btn-primary btn-lg tw-mt-80">view all</a></div> -->
        </div>
        <!-- End Row -->
    </div>
    <!-- Container End -->
</section>

<section id="main-container" class="main-container">
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <div class="section-heading wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                    <h2 style="font-size:40px;">
                        Everything You Need to Run Your Education Consultancy
                    </h2>
                    <span class="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40"></span>
                </div>
                <!-- Heading End -->
            </div>
            <!-- Col End -->
        </div>
        <!-- End Row 1 -->

        <div class="row">
            <div class="col-md-6 wow fadeInLeft" data-wow-duration="1.1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <div class="tw-about-bin">
                    <h6><span>ADMINISTRATION</span></h6>
                    <h2 class="column-title" style=" font-weight: 600;font-size: 31px;">Student Management System</h2>
                    <span class="animate-border tw-mb-40 tw-mt-20"></span>
                    <h4>Handle End-to-End Student Journeys</h4>
                    <p>Manage the complete student journey from start to finish. Communicate with students easily, store all records in one place, and onboard new students without hassle. Keep everything organized with a full 360° student profile.
</p>
                    <h4>Overseas Education Support</h4>
                    <p>Help students choose the right study destination by offering personalized guidance. Track their preferences and manage applications smoothly through one system.</p>
                </div>
                <!-- About Bin End -->
            </div>
            <!-- Col End -->
            <div class="col-md-6 align-self-md-center wow fadeInRight" data-wow-duration="1.1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.3s; animation-name: fadeInRight;">
                <img src="https://www.eductrl.com/images/screenshots/students.png" alt="" class="img-fluid image-styling" loading="lazy">
            </div>
            <!-- Col End -->
        </div>
        <!-- Row end -->

        <div class="row tw-mt-100">
            <div class="col-md-6 align-self-md-center wow fadeInLeft" data-wow-duration="1.1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <img src="https://www.eductrl.com/images/screenshots/uni_appls.png" alt="" class="img-fluid image-styling" loading="lazy">
            </div>
            <!-- Col End -->
            <div class="col-md-6 wow fadeInRight" data-wow-duration="1.1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.3s; animation-name: fadeInRight;">
                <div class="tw-about-bin">
                    <h2 class="column-title" style=" font-weight: 600;font-size: 31px;">University Application Management</h2>
                    <span class="animate-border tw-mb-40 tw-mt-20"></span>
                    <h4>Smart & Easy Application Search</h4>
                    <p>Quickly find any application using filters like student name, country, course, or status.
Save time and manage data more efficiently.
</p>
                    <h4>Live Updates & Communication</h4>
                    <p>Keep students informed at every step of the process. Update application status in real-time and ensure a clear, hassle-free experience.</p>
                </div>
                <!-- About Bin End -->
            </div>
            <!-- Col End -->
        </div>
        <!-- Row end -->


        <div class="row tw-mt-100">
            <div class="col-md-6 wow fadeInLeft" data-wow-duration="1.1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <div class="tw-about-bin">
                    <h2 class="column-title" style=" font-weight: 600;font-size: 31px;">Easy-to-Use Student Self-Service Portal</h2>
                    <span class="animate-border tw-mb-40 tw-mt-20"></span>
                    <p>Our CRM comes with a simple and user-friendly portal for both students and staff. Students can access important information and manage their activities from one place.</p>
                    <p>Students can easily create accounts, update their personal and academic details, and upload required documents without any hassle.
</p>
<p>They can also check test scores, add study preferences, and explore suitable courses. The system allows them to track their university application status anytime.

                </div>
                <!-- About Bin End -->
            </div>
            <!-- Col End -->
            <div class="col-md-6 align-self-md-center wow fadeInRight" data-wow-duration="1.1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.3s; animation-name: fadeInRight;">
                <img src="https://www.eductrl.com/images/screenshots/student_dashboard.jpg" alt="" class="img-fluid image-styling" loading="lazy">
            </div>
            <!-- Col End -->
        </div>
        <!-- Row end -->

    </div>
    <!-- Container end -->
</section>

<section class="home-clients-section">
    <div class="container">
        <div class="home-clients-shell">
            <h4 class="home-clients-title">Our Clients</h4>
            <div class="home-clients-logos">
                <div class="home-client-logo">
                    <img src="https://www.eductrl.com/images/ourClient/endesa.png" alt="Endesa" class="img-fluid" loading="lazy">
                </div>
                <div class="home-client-logo">
                    <img src="https://www.eductrl.com/images/ourClient/hitouchglobal.png" alt="HiTouch Global" class="img-fluid" loading="lazy">
                </div>
                <div class="home-client-logo">
                    <img src="https://www.eductrl.com/images/ourClient/iifls.png" alt="Indian Institute of Foreign Languages" class="img-fluid" loading="lazy">
                </div>
                <div class="home-client-logo">
                    <img src="https://www.eductrl.com/images/ourClient/wattsgroup.jpg" alt="Watts Group" class="img-fluid" loading="lazy">
                </div>
                <div class="home-client-logo">
                    <img src="https://www.eductrl.com/images/ourClient/studyabroad.png" alt="SA7 Study Abroad" class="img-fluid" loading="lazy">
                </div>
                <div class="home-client-logo">
                    <img src="https://www.eductrl.com/images/ourClient/Athena_Study_Abroad.png" alt="Athena Study Abroad" class="img-fluid" loading="lazy">
                </div>
            </div>
        </div>
    </div>
</section>

<section id="tw-analysis" class="tw-analysis-area" style="    padding-bottom: 90px;">
    <div class="analysis-bg-pattern d-none d-md-inline-block">
        <img class="wow fadeInUp" src="https://www.eductrl.com/images/check-seo/cloud.png" alt="" style="visibility: visible; animation-name: fadeInUp;">
        <img class="wow fadeInUp" src="https://www.eductrl.com/images/check-seo/cloud2.png" alt="" style="visibility: visible; animation-name: fadeInUp;">
        <!-- <img class="wow fadeInUp" src="https://www.eductrl.com/images/check-seo/announce.png" alt="" style="visibility: visible; animation-name: fadeInUp;">
        <img class="wow fadeInUp" src="https://www.eductrl.com/images/check-seo/chart.png" alt="" style="visibility: visible; animation-name: fadeInUp;"> -->
    </div>
    <!-- End Analysis Pattern img -->
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-12 col-md-10 text-center wow fadeInDown" style="visibility: visible; animation-name: fadeInDown;">
                <h2 class="column-title">
Ready to Try Our Software?
                    <p style="margin-top:20px;color:#fff;">Get in touch with us today and request a free demo. Our team will guide you and understand your needs.</p>
                </h2>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-12 no-padding">
                        <div class="form-group">
                            <button class="btn btn-dark mobile-display-none" data-toggle="modal" data-target="#enquiryModal" style="padding: 10px 20px;margin-right: 25px;">Book a
                                Demo</button>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                      <p>Our platform is designed to solve common challenges in the education industry. It works as both a CRM and management system to help you run your business smoothly. The system is cloud-based, easy to use, and gives you clear insights with all your data in one place. Whether you run a study abroad consultancy, coaching center, or training institute, this solution helps you manage everything efficiently.
</p>
                    </div>
                </div>

            </div>
            <!-- Col End -->
        </div>
        <!-- End Row -->
    </div>
    <!-- End container -->
</section>

        <a href="https://wa.me/8801518301098?text=Hi, I'm Interested in EduCtrl"
            className="fixed-bottomRight  whatsappIcon" >
            <img src="https://www.eductrl.com/images/whatsapp.png" alt="icon" class="fixed-bottomRight whatsappIcon" loading="lazy">
        </a>
                    <footer id="tw-footer" class="tw-footer">
   <div class="container">
      <div class="row">
         <div class="col-md-12 col-lg-4">
            <div class="tw-footer-info-box">
               <a href="https://www.eductrl.com" class="footer-logo">
                  <img src="https://www.eductrl.com/images/eductrl-logo.png" alt="EduCtrl" style="width:220px;">
               </a>
               <p class="footer-info-text" style="font-size: 14px;line-height: 24px;">
                  Running an Education Consultancy/ Coaching business involves various activities. You need a good & powerful software system to manage your business more efficiently & provide good services to your students.<br /><br />EduCtrl Software is the perfect, affordable solution for your business.
               </p>
               <div class="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                     <li><a target="_blank" href="https://fb.me/eductrlcrm"><i class="fa fa-facebook"></i></a></li>
                     <li><a target="_blank" href="https://x.com/eductrlcrm" aria-label="X (Twitter)"><span class="x-logo-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></span></a></li>
                     <!-- <li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
                     <li><a target="_blank" href="https://www.linkedin.com/company/eductrl/"><i class="fa fa-linkedin"></i></a></li>
                     <li><a href="https://www.instagram.com/eductrlcrm"><i class="fa fa-instagram"></i></a></li>
                  </ul>
               </div>
               <!-- End Social link -->
            </div>
            <!-- End Footer info -->

         </div>
         <!-- End Col -->
         <div class="col-md-12 col-lg-8">
            <div class="row mt-30">
               <div class="col-md-6">
                  <div class="contact-us">
                     <div class="contact-icon">
                        <i class="icon icon-envelope3"></i>
                     </div>
                     <!-- End contact Icon -->
                     <div class="contact-info">
                        <h3>info@eduanchor.ai</h3>
                        <p>Mail Us</p>
                     </div>
                     <!-- End Contact Info -->
                  </div>
                  <!-- End Contact Us -->
               </div>
               <!-- End Col -->
               <div class="col-md-6">
                  <div class="contact-us contact-us-last">
                     <div class="contact-icon">
                        <i class="icon icon-phone3"></i>
                     </div>
                     <!-- End contact Icon -->
                     <div class="contact-info">
                        <h3 style="display:flex;">+8801518301098</h3>
                        <p style="display: flex;">Call or Whatsapp<br>
                         </p>
                       <p style="display:flex;justify-content: center;">
                          <a class="footer-icon"  href="https://wa.me/+8801518301098"><i class="fa fa-whatsapp" aria-hidden="true" style="    font-size: 30px;"></i></a> &nbsp;&nbsp;&nbsp;
                           <a class="footer-icon" href="tel:+8801518301098"><i class="fa fa-phone-square" aria-hidden="true" style="    font-size: 30px;"></i></a>
                       </p>
                     </div>
                     <!-- End Contact Info -->
                  </div>
                  <!-- End Contact Us -->
               </div>
              
               <!-- End Col -->
                </div>

               
            <!-- End Contact Row -->
            <div class="row">
               <div class="col-md-12 col-lg-6">
                  <div class="footer-widget footer-left-widget">
                     <div class="section-heading">
                        <h3>Useful Links</h3>
                        <span class="animate-border border-black"></span>
                     </div>
                     <ul>
                        <li><a href="https://www.eductrl.com/consultancy">Consultancy CRM</a></li>
                        <li><a href="https://www.eductrl.com/coaching">Coaching CRM</a></li>
                        <li><a href="https://www.eductrl.com/eductrl-cms">Website Builder</a></li>
                        <li><a href="https://www.eductrl.com/pricing">Pricing</a></li>
                        <li><a href="https://www.eductrl.com/faq">FAQ</a></li>
                     </ul>
                     <ul>
                        <li><a href="https://www.eductrl.com/about">About Us</a></li>
                        <li><a href="https://www.eductrl.com/blog">Blog</a></li>
                        <li><a href="https://www.eductrl.com/contact">Contact us</a></li>
                        <li><a href="https://www.eductrl.com/affiliates">Affiliates</a></li>
                        <li><a href="https://www.eductrl.com/offers">Offers</a></li>
                     </ul>
                  </div>
                  <!-- End Footer Widget -->
               </div>
               <!-- End col -->
               <div class="col-md-12 col-lg-6">
                  <div class="footer-widget">
                     <div class="section-heading">
                        <h3>Subscribe</h3>
                        <span class="animate-border border-black"></span>
                     </div>
                     <p style="">Don't miss to subscribe to our news feeds, kindly fill the form below.</p>
                     <form action="#" onsubmit="return false;">
                        <div class="form-row">
                           <div class="col tw-footer-form">
                              <input id="newsletter_email" type="email" class="form-control" placeholder="Email Address">
                              <button id="newsletter-form-btn" type="submit"><i class="fa fa-send"></i></button>
                           </div>
                        </div>
                     </form>
                     <!-- End form -->
                  </div>
                  <!-- End footer widget -->
               </div>
               <!-- End Col -->
               <div class="col-md-12 col-lg-6 mt-4">
                  <div class="footer-widget footer-left-widget">
                     <a href="https://www.eductrl.com/study-abroad">Study Abroad</a> | 
                     <a href="https://www.eductrl.com/education-tech">Education Tech</a>
                  </div>
                  <!-- End Footer Widget -->
               </div>
            </div>
            <!-- End Row -->
         </div>
         <!-- End Col -->
      </div>
      <!-- End Widget Row -->
   </div>
   <!-- End Contact Container -->

   <div class="copyright">
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <span>&copy; 2026, All Right Reserved. SASH INFO SERVICES PVT LTD. GSTN: 29AATCS8855R1ZR</span>
            </div>
            <!-- End Col -->
            <div class="col-md-5">
                <div class="copyright-menu">
                    <ul>
                        <li><a href="https://www.eductrl.com/privacy-policy">Privacy Policy</a></li>
                        <li><a href="https://www.eductrl.com/refund-policy">Refund Policy</a></li>
                        <li><a href="https://www.eductrl.com/terms-of-service">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <!-- End col -->
        </div>
        <!-- End Row -->
    </div>
    <!-- End Copyright Container -->
</div>
<!-- End Copyright -->

<!-- Back to top -->
<div id="back-to-top" class="back-to-top">
    <button class="btn btn-dark" title="Back to Top">
        <i class="fa fa-angle-up" style="color:#fff;"></i>
    </button>
</div>
<!-- End Back to top -->
</footer>

            </div><!-- #app -->


    <!-- Scripts -->
    
    <script src="https://www.eductrl.com/assets/plugins/jquery/jquery.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/bootstrap/js/popper.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/bootstrap/js/bootstrap.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/sticky-kit-master/dist/sticky-kit.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/sparkline/jquery.sparkline.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/bootstrap-datepicker/bootstrap-datepicker.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/select2/dist/js/select2.full.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/raphael/raphael-min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/morrisjs/morris.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/styleswitcher/jQuery.style.switcher.js" defer></script>
    <script src="https://www.eductrl.com/js/owl-carousel.2.3.0.min.js" defer></script>
    <script src="https://www.eductrl.com/js/waypoints.min.js" defer></script>
    <script src="https://www.eductrl.com/js/jquery.counterup.min.js" defer></script>
    <script src="https://www.eductrl.com/js/jquery.magnific.popup.js" defer></script>
    <script src="https://www.eductrl.com/js/wow.min.js" defer></script>
    <script src="https://www.eductrl.com/js/smoothscroll.js" defer></script>
    <script src="https://www.eductrl.com/js/main.js" defer></script>

    
<script src="https://www.google.com/recaptcha/api.js?render=6LdkqroeAAAAABvXU2EphNeoH6QPSheI_ZTPqMmH"></script>

<script>
    (function initRecaptchaForms() {
        function run() {
            if (typeof jQuery === 'undefined') {
                setTimeout(run, 50);
                return;
            }
            jQuery(document).ready(function() {
        var sitekey = '6LdkqroeAAAAABvXU2EphNeoH6QPSheI_ZTPqMmH';

        function validateEmail(email) {
            if (email.length < 6)
                return false;
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
            return emailReg.test(email);
        }

        $('#contact-form-btn').click(function() {

            grecaptcha.ready(function() {
                grecaptcha.execute(sitekey, {
                    action: 'contact_submit'
                }).then(function(token) {

                    var name = $("#c_name").val();
                    var email = $("#c_email").val();
                    var phone = $("#c_phone").val();
                    var subject = $("#c_subject").val();
                    var message = $("#c_message").val();

                    $("#returnmessage").empty(); // To empty previous error/success message.
                    // Checking for blank fields.
                    if (name == '' || email == '' || phone == '' || message == '') {
                        alert("Please fill all mandatory fields");
                    } else {
                        // Returns successful data submission message when the entered information is stored in database.
                        $("#contact-form-btn").attr("disabled", true);
                        $("#contact-form-btn").val('Sending...');
                        $.post("https://www.eductrl.com/contact/send", {
                            c_name: name,
                            c_email: email,
                            c_phone: phone,
                            c_subject: subject,
                            c_message: message,
                            source: 'contact form',
                            captcha_token: token,
                            _token: "CxEwUn85CPRuRKB5NEfi3qldzPUo0rxvx5qooIFY"
                        }, function(data) {
                            $("#contact-form-btn").attr("disabled", false);
                            $("#contact-form-btn").val('SEND');
                            if (data == '1') {
                                $("#contact-form").trigger("reset");
                                $("#returnmessage").html("<span style='color:#047c12;'>Your message is sent!</span>");
                            } else {
                                $("#returnmessage").html("<span style='color:red;'>Error occured. Please use alternative contact method.</span>");
                            }
                        });
                    }

                });
            });
        });

        $('#eductrl-cms-form-btn').click(function() {
            grecaptcha.ready(function() {
                grecaptcha.execute(sitekey, {
                    action: 'eductrl_cms_submit'
                }).then(function(token) { 

                    var name = $("#form_name").val();
                    var email = $("#form_email").val();
                    var phone = $("#form_phone").val();
                    var message = $("#form_message").val();

                    $("#l").empty(); // To empty previous error/success message.
                    // Checking for blank fields.
                    if (name == '' || email == '' || phone == '' || message == '') {
                        alert("Please fill all mandatory fields");
                    } else {
                        // Returns successful data submission message when the entered information is stored in database.
                        $("#eductrl-cms-form-btn").attr("disabled", true);
                        $("#eductrl-cms-form-btn").val('Sending...');
                        $.post("https://www.eductrl.com/eductrl-cms/send-message", {
                            form_name: name,
                            form_email: email,
                            form_phone: phone,
                            form_message: message,
                            source: 'eductrl_cms_form',
                            captcha_token: token,
                            _token: "CxEwUn85CPRuRKB5NEfi3qldzPUo0rxvx5qooIFY"
                        }, function(data) {
                            $("#eductrl-cms-form-btn").attr("disabled", false);
                            $("#eductrl-cms-form-btn").val('Send Message');
                            if (data == '1') {
                                $("#eductrl-form").trigger("reset");
                                $("#returnmessage1").html("<span style='color:#fff;'>Your message is sent!</span>");
                            } else {
                                $("#returnmessage1").html("<span style='color:red;'>Error occured. Please use alternative contact method.</span>");
                            }
                        });
                    }

                });
            });
        });



        $('#enquiry-form-submit').click(function() {
            const thankYouDiv = document.getElementById('thankYouDiv');
            const formDiv = document.getElementById('formDiv');
            grecaptcha.ready(function() {
                grecaptcha.execute(sitekey, {
                    action: 'enquiry_submit'
                }).then(function(token) {

                    var name = $("#name").val();
                    var email = $("#email").val();
                    var phone = $("#phone").val();
                    var business = $("#business").val();
                    var city = $("#city").val();
                    var country = $("#country").val();
                    var interested_in = $("#interested_in").val();
                    var message = $("#message").val();

                    // Checking for blank fields.
                    if (name == '' || email == '' || phone == '' || business == '' || city == '' || country == '' || interested_in == '') {
                        //console.log("Form values:" + name + "|" + email + "|" + phone + "|" + business + "|" + city);
                        alert('Please fill all required fields');
                    } else {
                        // Returns successful data submission message when the entered information is stored in database.
                        $("#enquiry-form-submit").attr("disabled", true);
                        $("enquiry-form-submit").val('Sending...');
                        $.post("https://www.eductrl.com/send-enquiry", {
                            c_name: name,
                            c_email: email,
                            c_phone: phone,
                            c_business: business,
                            c_city: city,
                            c_country: country,
                            c_interested_in: interested_in,
                            c_message: message,
                            source: 'enquiry form',
                            captcha_token: token,
                            _token: "CxEwUn85CPRuRKB5NEfi3qldzPUo0rxvx5qooIFY",
                        }, function(data) {
                            if (data == '1') {
                                $("#enquiry-form").trigger("reset"); // To reset form fields on success.
                                // formDiv.style.display = 'none';
                                // thankYouDiv.style.display = 'block';

                                // ✅ Redirect to a success page after short delay (optional)
                                window.location.href = "https://www.eductrl.com/thank-you-req-demo";
                            } else {
                                $("#enquiry-form").trigger("reset"); // To reset form fields on success.
                                $('#enquiryModal').modal('toggle');
                                alert("Error occured. Please use alternative contact method.");
                            }
                        });
                    }

                });
            });
        });



        $('#newsletter-form-btn').click(function() {

            grecaptcha.ready(function() {
                grecaptcha.execute(sitekey, {
                    action: 'newsletter_submit'
                }).then(function(token) {

                    var email = $("#newsletter_email").val();

                    // Checking for blank fields.
                    if (email == '') {
                        alert("Please enter email id");
                    } else if (!validateEmail(email)) {
                        alert("Please enter valid email id");
                    } else {
                        // Returns successful data submission message when the entered information is stored in database.
                        $.post("https://www.eductrl.com/newsletter-subscribe", {
                            c_email: email,
                            source: 'newsletter form',
                            captcha_token: token,
                            _token: "CxEwUn85CPRuRKB5NEfi3qldzPUo0rxvx5qooIFY"
                        }, function(data) {
                            if (data == '1') {
                                $("#newsletter-form").trigger("reset");
                                alert("Thanks! You have subscribed!");
                            } else {
                                alert("Oops! Something went wrong.");
                            }
                        });
                    }

                });
            });
        });



            });
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', run);
        } else {
            run();
        }
    })();
</script>

            <!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M85SFMLP"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->


    <!-- Meta Pixel Code -->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '607839048127874');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=607839048127874&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Meta Pixel Code -->

	<script type="text/javascript">
	_linkedin_partner_id = "7318036";
	window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
	window._linkedin_data_partner_ids.push(_linkedin_partner_id);
	</script><script type="text/javascript">
	(function(l) {
	if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
	window.lintrk.q=[]}
	var s = document.getElementsByTagName("script")[0];
	var b = document.createElement("script");
	b.type = "text/javascript";b.async = true;
	b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
	s.parentNode.insertBefore(b, s);})(window.lintrk);
	</script>
	<noscript>
	<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=7318036&fmt=gif" />
	</noscript>

	<script type="text/javascript">
	var sc_project=12775076; 
	var sc_invisible=1; 
	var sc_security="9e105de8"; 
	</script>
	<script type="text/javascript"
	src="https://www.statcounter.com/counter/counter.js"
	async></script>
	<noscript><div class="statcounter"><a title="web counter"
	href="https://statcounter.com/" target="_blank"><img
	class="statcounter"
	src="https://c.statcounter.com/12775076/0/9e105de8/1/"
	alt="web counter"
	referrerPolicy="no-referrer-when-downgrade"></a></div></noscript>


	
`;

export function HomeCloneContent() {
  return (
    <div
      className="eductrl-clone-page"
      dangerouslySetInnerHTML={{ __html: normalizeCloneHtml(rawHtml) }}
    />
  );
}
