const GPAListTemplate = `
<div>

<section class="content-header">
<h1>
    GPA
</h1>
    <ol class="breadcrumb">
        <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
        <li class="active"><a href="">GPA List</a></li>
    </ol>
</section>

<!-- Main content -->

<section class="content">
<div class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header">
                <div style="text-align: right;"><a data-toggle="modal" data-target="#modal-default-create" class="btn btn-primary btn-sm alert-success fa fa-plus" @click="createGPA();">&nbsp Add gpa</a> </div>




                <!-- editModal-content-start -->

		                <div class="modal fade" id="modal-default" v-if="editModal">
					        <div class="modal-dialog">
					            <div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span></button>
										<h4 class="modal-title"><b>Edit gpa information</b></h4>
                                    </div>
                                    
                                    <div class="modal-body">

                                        <div class="form-group">
                                            <label class="required-field">Name &nbsp</label>
                                            <input  class="form-control" placeholder="Please enter name" v-model="clickedItem.name">
                                        </div>
            
                                        <div class="form-group">
                                            <label class="required-field">Grade Point &nbsp</label>
                                            <input  class="form-control" placeholder="Please enter grade piont" v-model="clickedItem.grade_point">
                                        </div>
            
                                        <div class="form-group">
                                            <label class="required-field">Branch &nbsp</label>
                                            <select class="form-control" v-model="clickedItem.branches_id">
                                                <option disabled>Select Branch</option>
                                                <option v-for="branch in branches" :value="branch.id">{{ branch.name }}</option>
                                            </select>
                                        </div>
            
                                        <div class="form-group">
                                            <label class="required-field">grade &nbsp</label>
                                            <select class="form-control" v-model="clickedItem.grades_id">
                                                <option disabled>Select Class</option>
                                                <option v-for="grade in grades" :value="grade.id">{{ grade.name }}</option>
                                            </select>
                                        </div>
										
									</div>

									<div class="modal-footer">
										<button type="button" class="btn btn-default pull-left" data-dismiss="modal" >Close</button>
										<button type="button" class="btn btn-primary" @click="update()" data-dismiss="modal">Update</button>
									</div>
								  
					            </div>
					        </div>				          
                        </div>
                        <!--end edit modal-->
                        


                        <!-- deleteModal-content-start -->

						<div class="modal modal-danger fade" id="modal-danger" v-if="deleteModal">
						
					        <div class="modal-dialog">
					          	<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span></button>
										<h4 class="modal-title"><b>Selected gpas will be deleted.</b></h4>
									</div>

									<div class="modal-body">
										<p><b>Are you Sure??</b></p>
									</div>

									<div class="modal-footer">
										<button type="button" class="btn btn-outline pull-left" data-dismiss="modal" >Close</button>
										<button type="button" class="btn btn-outline" data-dismiss="modal" @click="removeItem()">Yes! Delete!</button>
									</div>
					          	</div>

					        </div>

					    </div>

						<!-- /.deleteModal-content-end -->



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
                                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 260px;">Name</th>
                                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 260px;">Grade Type</th>
                                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 260px;">Branch Name</th>
                                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 260px;">Class</th>
                                            
                                        </tr>

                                    </thead>
                                    
                                    <tbody>
                                        
                                        <tr role="row" class="odd" v-for="(gpa,i) in gpas" :key="i">
                                            <td>{{i+1}}</td>
                                            <td>
                                                <a data-toggle="modal" data-target="#modal-default" class="btn btn-primary btn-sm alert-warning fa fa-pencil" @click="editModal=true; clickedItem = gpa"></a>
                                                <a data-toggle="modal" data-target="#modal-danger"  class="btn btn-sm btn-danger fa fa-trash" @click="deleteModal= true; clickedItem = gpa"></a>
                                            </td>
                                            <td>{{gpa.name}}</td>
                                            <td>{{gpa.grade_point}}</td>
                                            <td>{{gpa.bName}}</td>
                                            <td>{{gpa.cName}}</td>
                                        </tr>
                                                   
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

export default GPAListTemplate