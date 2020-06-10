const ConventionalGradingTemplate = `
<div>

<section class="content-header">
        <h1>
            Conventional Grade List
        </h1>
            <ol class="breadcrumb">
                <li><router-link to="/conventional-grading"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
                <li class="active"><a href="">Conventional grades</a></li>
            </ol>
    </section>

    <!-- Main content -->

    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-header">
                        <div style="text-align: right;"><a data-toggle="modal" data-target="#modal-default-create" class="btn btn-primary btn-sm alert-success fa fa-plus" @click="createModal= true;">&nbsp Add conventional Grade</a> </div>



                        <!-- /.data table -->

                        <div class="box-body table-responsive no-padding">
                            <div class="col-xs-12">
                                <div class="box">
                                
                                    <div class="box-header">
                                        <h3 class="box-title"></h3>
                                    </div>

                                    <div class="box-body">
                                    
                                        <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap"><div class="row"><div class="col-sm-12"><table id="example1" class="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
                                            <thead>
                                                <tr role="row">
                                                    <th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending" style="width: 225px;">SL NO</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending" style="width: 282px;">Action</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 260px;">Material Name</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 260px;">Quantity</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 260px;">Branch Name</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 260px;">Location</th>
                                                    
                                                </tr>

                                            </thead>
                                            
                                            <tbody>
                                                
                                                
                                                           
                                            </tbody></table></div></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- /.data table -->



                    </div>
                </div>
            </div>
        </div>
    </section>

</div>
`

export default ConventionalGradingTemplate