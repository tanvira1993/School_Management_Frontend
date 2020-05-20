const InventoryLocationTemplate = `
<div>



    <section class="content-header">
        <h1>
            Inventory Location
        </h1>
            <ol class="breadcrumb">
                <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
                <li class="active"><a href="">location's List</a></li>
            </ol>
    </section>

    <!-- Main content -->

    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-header">
                        <div style="text-align: right;"><a data-toggle="modal" data-target="#modal-default-create" class="btn btn-primary btn-sm alert-success fa fa-plus" @click="createModal= true;">&nbsp Add Inventory Location</a> </div>
                        


                        <!-- createModal-content-start -->

		                <div class="modal fade" id="modal-default-create" v-if="createModal">
					        <div class="modal-dialog">
					            <div class="modal-content">
					                <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span></button>
                                        <h4 class="modal-title">Add New Invantory Location</h4>
                                    </div>

					              	<div class="modal-body">
										<div class="form-group">
											<label class="required-field">Location's Name &nbsp</label>
											<input  class="form-control" placeholder="Please enter location's name" v-model="newLocation.name">
                                        </div>
                                        
                                        <div class="form-group">
											<label class="required-field">Branch &nbsp</label>
											<select class="form-control" v-model="newLocation.branches_id">
												<option disabled>Select Branch</option>
												<option v-for="branch in branches" :value="branch.id">{{ branch.name }}</option>
											</select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Description &nbsp</label>
                                            <textarea class="form-control" rows="3" placeholder="Enter location description" v-model="newLocation.description"></textarea>
                                        </div>
										
									</div>

									<div class="modal-footer">
										<button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
										<button type="button" class="btn btn-primary" @click="submit()" data-dismiss="modal">Submit</button>
									</div>
									
					            </div>
					            
					        </div>
					    </div>				          
                        <!-- /.createModal-content-end -->
                        

                        <!-- editModal-content-start -->

		                <div class="modal fade" id="modal-default" v-if="editModal">
					        <div class="modal-dialog">
					            <div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span></button>
										<h4 class="modal-title"><b>Edit {{clickedItem.name}}</b></h4>
									</div>

									<div class="modal-body">
										<div class="form-group">
											<label class="required-field">Title &nbsp</label>
											<input  class="form-control" v-model= "clickedItem.name">
                                        </div>
                                        
                                        <div class="form-group">
											<label class="required-field">Branch &nbsp</label>
											<select class="form-control" v-model="clickedItem.branches_id">
												<option disabled>Select Branch</option>
												<option v-for="branch in branches" :value="branch.id">{{ branch.name }}</option>
											</select>
                                        </div>

                                        <div class="form-group">
                                            <label>Description &nbsp</label>
                                            <textarea class="form-control" rows="3" placeholder="Enter location description" v-model="clickedItem.description"></textarea>
                                        </div>

									</div>

									<div class="modal-footer">
										<button type="button" class="btn btn-default pull-left" data-dismiss="modal" >Close</button>
										<button type="button" class="btn btn-primary" @click="update()" data-dismiss="modal">Update</button>
									</div>
								  
					            </div>
					        </div>				          
					    </div>

                        <!-- /.editModal-content-end -->
                        

                        <!-- deleteModal-content-start -->

						<div class="modal modal-danger fade" id="modal-danger" v-if="deleteModal">
						
					        <div class="modal-dialog">
					          	<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span></button>
										<h4 class="modal-title"><b>{{clickedItem.name}} will be deleted.</b></h4>
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
                                        <h3 class="box-title">Inventory Locations for {{inventroy_locations[0].bName}}</h3>
                                    </div>

                                    <div class="box-body">
                                    
                                        <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap"><div class="row"><div class="col-sm-12"><table id="example1" class="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
                                            <thead>
                                                <tr role="row">
                                                    <th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending" style="width: 225px;">SL NO</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending" style="width: 282px;">Action</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 260px;">Title</th>
                                                    
                                                </tr>

                                            </thead>
                                            
                                            <tbody>
                                                
                                                <tr role="row" class="odd" v-for="(location, index) in inventroy_locations" :key="index">
                                                    <td>{{index+1}}</td>
                                                    <td class="sorting_1">
                                                        <a data-toggle="modal" data-target="#modal-default" class="btn btn-primary btn-sm alert-warning fa fa-pencil" @click="editModal=true; clickedItem = location"></a>
                                                        <a data-toggle="modal" data-target="#modal-danger"  class="btn btn-sm btn-danger fa fa-trash" @click="deleteModal= true; clickedItem = location"></a>
                                                    </td>
                                                    <td>{{location.name}}</td>
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

export default InventoryLocationTemplate