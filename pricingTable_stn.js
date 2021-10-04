<link href='https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css' rel='stylesheet'>
<link href='' rel='stylesheet'>
<style>
  body {
    padding: 30px 0
  }

  a {
    text-decoration: none;
  }

  .pricingTable {
    text-align: center;
    background: #fff;
    margin: 0 -15px;
    box-shadow: 0 0 10px #ababab;
    padding-bottom: 40px;
    border-radius: 10px;
    color: #cad0de;
    transform: scale(1);
    transition: all .5s ease 0s
  }

  .pricingTable:hover {
    transform: scale(1.05);
    z-index: 1
  }

  .pricingTable .pricingTable-header {
    padding: 40px 0;
    background: #f5f6f9;
    border-radius: 10px 10px 50% 50%;
    transition: all .5s ease 0s
  }

  .pricingTable:hover .pricingTable-header {
    background: #ff9624
  }

  .pricingTable .pricingTable-header i {
    font-size: 50px;
    color: #858c9a;
    margin-bottom: 10px;
    transition: all .5s ease 0s
  }

  .pricingTable .price-value {
    font-size: 35px;
    color: #ff9624;
    transition: all .5s ease 0s
  }

  .pricingTable .month {
    display: block;
    font-size: 14px;
    color: #cad0de
  }

  .pricingTable:hover .month,
  .pricingTable:hover .price-value,
  .pricingTable:hover .pricingTable-header i {
    color: #fff
  }

  .pricingTable .heading {
    font-size: 24px;
    color: #ff9624;
    margin-bottom: 20px;
    text-transform: uppercase
  }

  .pricingTable .pricing-content ul {
    list-style: none;
    padding: 0px 5px 0px 5px;
    margin-bottom: 30px
  }

  .pricingTable .pricing-content ul li {
    line-height: 30px;
    color: #a7a8aa
  }

  .pricingTable .pricingTable-signup a {
    display: inline-block;
    font-size: 15px;
    color: #fff;
    padding: 10px 35px;
    border-radius: 20px;
    background: #ffa442;
    text-transform: uppercase;
    transition: all .3s ease 0s
  }

  .pricingTable .pricingTable-signup a:hover {
    box-shadow: 0 0 10px #ffa442
  }

  .pricingTable.blue .heading,
  .pricingTable.blue .price-value {
    color: #4b64ff
  }

  .pricingTable.blue .pricingTable-signup a,
  .pricingTable.blue:hover .pricingTable-header {
    background: #4b64ff
  }

  .pricingTable.blue .pricingTable-signup a:hover {
    box-shadow: 0 0 10px #4b64ff
  }

  .pricingTable.red .heading,
  .pricingTable.red .price-value {
    color: #ff4b4b
  }

  .pricingTable.red .pricingTable-signup a,
  .pricingTable.red:hover .pricingTable-header {
    background: #ff4b4b
  }

  .pricingTable.red .pricingTable-signup a:hover {
    box-shadow: 0 0 10px #ff4b4b
  }

  .pricingTable.green .heading,
  .pricingTable.green .price-value {
    color: #40c952
  }

  .pricingTable.green .pricingTable-signup a,
  .pricingTable.green:hover .pricingTable-header {
    background: #40c952
  }

  .pricingTable.green .pricingTable-signup a:hover {
    box-shadow: 0 0 10px #40c952
  }

  .pricingTable.blue:hover .price-value,
  .pricingTable.green:hover .price-value,
  .pricingTable.red:hover .price-value {
    color: #fff
  }

  @media screen and (max-width:990px) {
    .pricingTable {
      margin: 0 0 20px
    }
  }
</style>
<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'></script>
<script type='text/javascript' src='https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js'></script>
<div class="demo">
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-sm-6">
        <div class="pricingTable">
          <div class="pricingTable-header">
            <i class="fa fa-adjust"></i>
            <div class="price-value">500.000 ₫<span class="month">Một năm</span> </div>
          </div>
          <h3 class="heading">Gói 1 năm</h3>
          <div class="pricing-content">
            <ul>
              <li>Chọn lớp bất kỳ</li>
              <li>Sách kỹ thuật ghi nhớ bản online</li>
              <li>Videos kỹ thuật ghi nhớ</li>
              <li>Videos bài giảng sách giáo khoa của 1 lớp</li>
			  <li>Sơ đồ tư duy sách giáo khoa</li>
            </ul>
          </div>
          <div class="pricingTable-signup">
            <a href="/2021/10/danh-gia-sieu-tri-nho-hoc-duong.html">Bài đánh giá</a>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-sm-6">
        <div class="pricingTable green">
          <div class="pricingTable-header">
            <i class="fa fa-briefcase"></i>
            <div class="price-value">1.468.000 ₫<span class="month">Một cấp</span> </div>
          </div>
          <h3 class="heading">Gói 1 cấp</h3>
          <div class="pricing-content">
            <ul>
              <li>Chọn cấp bất kỳ</li>
              <li>Sách kỹ thuật ghi nhớ bản online</li>
              <li>Videos kỹ thuật ghi nhớ</li>
              <li>Videos bài giảng sách giáo khoa của 1 cấp</li>
			  <li>Sơ đồ tư duy sách giáo khoa</li>
            </ul>
          </div>
          <div class="pricingTable-signup">
            <a href="/2021/10/danh-gia-sieu-tri-nho-hoc-duong.html">Bài đánh giá</a>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 col-sm-6">
        <div class="pricingTable red">
          <div class="pricingTable-header">
            <i class="fa fa-cube"></i>
            <div class="price-value">2.368.000 ₫<span class="month">Trọn đời</span> </div>
          </div>
          <h3 class="heading">Gói trọn đời</h3>
          <div class="pricing-content">
            <ul>
              <li>Học từ lớp 1 - 12</li>
              <li>Sách kỹ thuật ghi nhớ bản giấy</li>
              <li>Videos kỹ thuật ghi nhớ</li>
              <li>Videos bài giảng sách giáo khoa của 12 năm</li>
			  <li>Sơ đồ tư duy sách giáo khoa</li>
            </ul>
          </div>
          <div class="pricingTable-signup">
            <a href="/2021/10/danh-gia-sieu-tri-nho-hoc-duong.html">Bài đánh giá</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
