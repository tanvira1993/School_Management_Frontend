const MaterialRefundTemplate = `
<div>

    <section class="content-header">
        <h1>
            Material Refund History
        </h1>

        <ol class="breadcrumb">
            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
            <li class="active"><a href="">material refund List</a></li>
        </ol>

    </section>

    <!-- Main content -->

    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-header">
                        <div style="text-align: right;"><a data-toggle="modal" data-target="#modal-default-create" class="btn btn-primary btn-sm alert-success fa fa-plus" @click="createModal= true;">&nbsp Refund materials</a> </div>



                        <!-- createModal-content-start -->

		                <div class="modal fade" id="modal-default-create" v-if="createModal">
					        <div class="modal-dialog">
					            <div class="modal-content">
					                <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span></button>
                                        <h4 class="modal-title">Refund Materials</h4>
                                    </div>

                                    <div class="modal-body">

                                        <div class="form-group">
                                            <label class="required-field">Branch &nbsp</label>
                                            <select class="form-control" v-model="newRefund.branches_id">
                                                <option disabled>Select Branch</option>
                                                <option v-for="branch in branches" :value="branch.id">{{ branch.name }}</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label class="required-field">Materials &nbsp</label>
                                            <select class="form-control" v-model="newRefund.materials_id">
                                                <option disabled>Select materials</option>
                                                <option v-for="material in materials" :value="material.id">{{ material.name }}</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label class="required-field">Inventory Location &nbsp</label>
                                            <select class="form-control" v-model="newRefund.inventory_locations_id">
                                                <option disabled>Select Location</option>
                                                <option v-for="location in locations" :value="location.id">{{ location.name }}</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label class="required-field">Quantity &nbsp</label>
                                            <input  class="form-control" placeholder="Please enter amount" v-model="newRefund.quantity">
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
										<h4 class="modal-title"><b>Edit Refund  History</b></h4>
                                    </div>
                                    
                                    <div class="modal-body">

                                        <div class="form-group">
                                            <label class="required-field">Branch &nbsp</label>
                                            <select class="form-control" v-model="clickedItem.branches_id">
                                                <option disabled>Select Branch</option>
                                                <option v-for="branch in branches" :value="branch.id">{{ branch.name }}</option>
                                            </select>
                                        </div>
                                    

                                        <div class="form-group">
                                            <label class="required-field">Materials &nbsp</label>
                                            <select class="form-control" v-model="clickedItem.materials_id">
                                                <option disabled>Select materials</option>
                                                <option v-for="material in materials" :value="material.id">{{ material.name }}</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label class="required-field">Quantity &nbsp</label>
                                            <input  class="form-control" placeholder="Please enter amount" v-model="clickedItem.quantity">
                                        </div>
                                      
                                        <div class="form-group">
                                            <label class="required-field">Inventory Location &nbsp</label>
                                            <select class="form-control" v-model="clickedItem.inventory_locations_id">
                                                <option disabled>Select Location</option>
                                                <option v-for="location in locations" :value="location.id">{{ location.name }}</option>
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
										<h4 class="modal-title"><b>Selected materials refund history will be deleted.</b></h4>
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
                                                    <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 260px;">Material Name</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 260px;">Quantity</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 260px;">Branch Name</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 260px;">Location</th>
                                                    
                                                </tr>

                                            </thead>
                                            
                                            <tbody>
                                                
                                                <tr role="row" class="odd" v-for="(allRefund,i) in allRefunds" :key="i">
                                                    <td>{{i+1}}</td>
                                                    <td>
                                                        <a data-toggle="modal" data-target="#modal-default" class="btn btn-primary btn-sm alert-warning fa fa-pencil" @click="editModal=true; clickedItem = allRefund"></a>
                                                        <a data-toggle="modal" data-target="#modal-danger"  class="btn btn-sm btn-danger fa fa-trash" @click="deleteModal= true; clickedItem = allRefund"></a>
                                                    </td>
                                                    <td>{{allRefund.mName}}</td>
                                                    <td>{{allRefund.quantity}}</td>
                                                    <td>{{allRefund.bName}}</td>
                                                    <td>{{allRefund.lName}}</td>
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

export default MaterialRefundTemplate