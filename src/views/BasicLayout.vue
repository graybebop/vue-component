<template>
  <!-- app wrapper -->
  <div class="kt-wrapper">
    <!-- header -->
    <div class="kt-header-wrapper">
      <div class="header-menu">메뉴</div>
      <div class="navbar">메뉴</div>
    </div>
    <!--// header -->
    <!-- page content -->
    <!-- <div class="kt-main">
      <div class="kt-toolbar-container">
        <div class="page-title">타이틀</div>
        <div class="page-breadcrumb">페이지경로</div>
      </div>
    </div> -->
    <!--// app main -->

    <!-- page content -->
    <div class="kt-content">
      <!-- 상단영역 -->
      <div class="kt-pageinfo-container">
        <div class="page-title">타이틀</div>
        <div class="page-breadcrumb">페이지경로</div>
      </div>
      <!--// 상단영역 -->
      <!-- page content container -->
      <div class="kt-content-container">
        <!-- 페이지별 구성요소 -->
        <div class="">구성요소</div>
        <!--// 페이지별 구성요소 -->
        <!-- 페이지별 구성요소 1 : Card-->
        <div class="card">
          <!-- card-header or kt-content-header use one of them-->
          <div class="card-header kt-content-header">
            <!-- search-filter : 검색조건에 대한 필터 -->
            <div class="card-title search-filter-wrap">검색영역 or 검색필터</div>
            <!-- button wrap : 버튼을 감싸는 모든 요소는 button-wrap -->
            <div class="card-toolbar button-wrap">버튼영역</div>
          </div>
          <!--// card-header or kt-content-header use one of them-->
          <div class="kt-table-wrapper">테이블영역</div>
          <div class="kt-paging-wrapper"></div>
        </div>
        <!--// 페이지별 구성요소 1  : Card -->
      </div>
      <!-- page content container -->
    </div>
    <!--// page content -->

    <!-- footer -->
    <div class="kt-footer">푸터</div>
    <!--// footer -->
  </div>
  <!--// app wrapper -->
</template>
