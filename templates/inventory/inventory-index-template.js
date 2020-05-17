const InventoryInedxTemplate = `
<div>



<section class="content-header">
	<h1>
	    Materials
	</h1>
	    <ol class="breadcrumb">
	        <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	        <li class="active"><a href="">Materials List</a></li>
	    </ol>
</section>

<!-- Main content -->

<section class="content">
    <div class="row">
	    <div class="col-xs-12">
	        <div class="box">
	            <div class="box-header">
	                <div style="text-align: center;"><a data-toggle="modal" data-target="#modal-default-create" class="btn btn-primary btn-sm alert-success fa fa-plus" @click="createModal= true;">&nbsp Add Material</a> </div>

                        
                    <!-- createModal-content-start -->

		                <div class="modal fade" id="modal-default-create" v-if="createModal">
					        <div class="modal-dialog">
					            <div class="modal-content">
					                <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span></button>
                                        <h4 class="modal-title">Add New Material</h4>
                                    </div>

					              	<div class="modal-body">
										<div class="form-group">
											<label class="required-field">Material's Name &nbsp</label>
											<input  class="form-control" placeholder="Please enter material's name" v-model="material.name">
										</div>
										
										<div class="form-group">
										<label class="required-field">Type &nbsp</label>
											<select class="form-control" v-model="material.type">
												<option disabled> Select Material Type </option>
												<option value="S"> Scrapable </option>
												<option> Consumable </option>
											</select>
										</div>
										
									</div>

									<div class="modal-footer">
										<button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
										<button type="button" class="btn btn-primary" @click="createModal= false;" data-dismiss="modal">Submit</button>
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
										<h4 class="modal-title"><b>Edit Book </b></h4>
									</div>

									<div class="modal-body">
										<div class="form-group">
											<label class="required-field">Title &nbsp</label>
											<input  class="form-control" placeholder="Please enter book's name">
										</div>

									</div>

									<div class="modal-footer">
										<button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
										<button type="button" class="btn btn-primary" @click="editModal= false;" data-dismiss="modal">Update</button>
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
										<h4 class="modal-title"><b>Book will be deleted.</b></h4>
									</div>

									<div class="modal-body">
										<p><b>Are you Sure??</b></p>
									</div>

									<div class="modal-footer">
										<button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
										<button type="button" class="btn btn-outline" data-dismiss="modal" @click="deleteBook()">Yes! Delete!</button>
									</div>
					          	</div>

					        </div>

					    </div>

						<!-- /.deleteModal-content-end -->

                        
                    </div>

                <!-- /.box -->
                </div>

         <!-- /.col -->
        </div>

    <!-- /.row -->
    </div>
</section>
	    




</div>
`

export default InventoryInedxTemplate