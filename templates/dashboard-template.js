const DashboardTemplate = `
<template>

<div class="wrapper">

<header class="main-header">
    <!-- Logo -->
    <a href="" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>S</b>MS</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>SchoolMng</b>System</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->

    <nav class="navbar navbar-static-top">
        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
            <span class="sr-only">Toggle navigation</span>
        </a>
        <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
                <li class="dropdown user user-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      <img src="./assets/adminLTE/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                      <span class="hidden-xs">{{user.name}}</span>
                    </a>
                  <ul class="dropdown-menu">

                        <li class="user-header">
                          <img src="./assets/adminLTE/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                          <p>
                            {{user.name}} - Web Developer
                            <small>Member since {{user.created_at}}</small>
                          </p>
                        </li>

                        <li class="user-footer">
                            <div class="pull-left">
                                <a href="#" class="btn btn-default btn-flat">Profile</a>
                            </div>
                            <div class="pull-right">
                              <a href="#" class="btn btn-default btn-flat" @click="logout()">Sign out</a>
                            </div>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    </nav>
  </header>
  
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="./assets/adminLTE/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{user.name}}</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu" data-widget="tree">

<!-- ====================menu space for ziadul starts===================== --> 

            <!-- =============Organization Menu=============== --> 

      <li class="treeview">

        <a href="#">
            <i class="fa fa-share"></i> <span>Organizations</span><span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
        </a>
        <ul class="treeview-menu">
            <li><router-link to="/organization"><i class="fa fa-circle-o"></i> Organizations list <router-link></li>
        </ul>
    
      </li>

        <!-- =============Inventory Menu=============== -->   


      <li class="treeview">

        <a href="#">
            <i class="fa fa-share"></i> <span>Inventory</span><span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
        </a>
        <ul class="treeview-menu">
            <li><router-link to="/inventory/materials"><i class="fa fa-circle-o"></i> Materials <router-link></li>
        </ul>

      </li>
      
 






































































































































<!-- ====================menu space for ziadul ends===================== -->  


<!-- ===================menu space for hashmi starts==================== --> 
  
          <!-- ===============Shift menu starts================= -->
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-star-half-o"></i> <span>Shift</span><span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                </a>
                <ul class="treeview-menu">
                    <li><router-link to="/organization/shift/list"><i class="fa fa-list-ol"></i> Shift's List <router-link></li>
                </ul>

            </li>

            <!-- =============Shift menu ends=======================-->
            <!-- ===============Department menu starts============== -->
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-puzzle-piece"></i> <span>Department</span><span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
                </a>
                <ul class="treeview-menu">
                    <li><router-link to="/organization/department/list"><i class="fa fa-list-ol"></i> Department's List <router-link></li>
                </ul>

            </li>

            <!-- =============Department menu ends=================-->

          <!-- ===============Library menu starts================= -->
            <li class="treeview">
              <a href="#">
                <i class="fa fa-university"></i> <span>Library</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li class="treeview">
                  <a href="#"><i class="fa fa-book"></i> Books
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul class="treeview-menu">
                    <li><router-link to="/organization/libraryBooks/list"><i class="fa fa-list-ol"></i>Book's List <router-link></li>
                  </ul>
                </li>

                <li class="treeview">
                  <a href="#"><i class="fa fa-cubes"></i> Categoriess
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul class="treeview-menu">
                    <li><router-link to="/organization/libraryCategories/list"><i class="fa fa-list-ol"></i>Categories's List <router-link></li>
                  </ul>
                </li>

                <li class="treeview">
                  <a href="#"><i class="fa fa-sort-amount-asc"></i> Bookshelves
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul class="treeview-menu">
                    <li><router-link to="/organization/libraryBookshelves/list"><i class="fa fa-list-ol"></i>Bookshelves's List <router-link></li>
                  </ul>
                </li>

                <li class="treeview">
                  <a href="#"><i class="fa fa-location-arrow"></i> Book Locations 
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul class="treeview-menu">
                    <li><router-link to="/organization/libraryBookLocation/list"><i class="fa fa-list-ol"></i>Book Location's List <router-link></li>
                  </ul>
                </li>

                <li class="treeview">
                  <a href="#"><i class="fa fa-tags"></i> Issue Books
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul class="treeview-menu">
                    <li><router-link to="/organization/libraryIssueBook/list"><i class="fa fa-list-ol"></i>Issue Books's List <router-link></li>
                  </ul>
                </li>
              
              </ul>
            
            </li>

            <!-- =============Library menu ends=======================-->










































































































































































































 <!-- ===================menu space for hashmi ends====================== -->    

 <!-- ===================menu space for tanvir starts==================== -->

















































































































































































































 <!-- ===================menu space for tanvir ends==================== --> 

 <!-- ====================menu space for Siam starts===================== -->



















































































  <!-- ===================menu space for Siam ends==================== -->            

            <!-- =============Demo menu for help============ -->

            <!--<li class="treeview">
              <a href="#">
                <i class="fa fa-share"></i> <span>Multilevel</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>
                <li class="treeview">
                  <a href="#"><i class="fa fa-circle-o"></i> Level One
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul class="treeview-menu">
                    <li><a href="#"><i class="fa fa-circle-o"></i> Level Two</a></li>
                    <li class="treeview">
                      <a href="#"><i class="fa fa-circle-o"></i> Level Two
                        <span class="pull-right-container">
                          <i class="fa fa-angle-left pull-right"></i>
                        </span>
                      </a>
                      <ul class="treeview-menu">
                        <li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>-->

            <!-- =============Demo menu for help============ -->

          
        </ul>

        

    </section>
    <!-- /.sidebar -->
  </aside>


  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    
        <router-view></router-view>
        
    </div>

        <footer class="main-footer">
        <div class="pull-right hidden-xs">
          <b>Version</b> 2.4.13
        </div>
        <strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE</a>.</strong> All rights
        reserved.
      </footer>

  <aside class="control-sidebar control-sidebar-dark" style="display: none;"></aside>

  </div>

</template>
`

export { DashboardTemplate }