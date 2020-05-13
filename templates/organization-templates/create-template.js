const OrganizationCreateTemplate = `

<div class="col-md-6">
    <div class="box box-primary">

        <div class="box-header with-border">
            <h3 class="box-title">Organization</h3>
        </div>

        <div>

            <div class="box-body">

                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" v-model="organization.title">
                </div>

            </div>

            <div class="box-footer">
                <button class="btn btn-primary" @click.prevent="submit()">Submit</button>
            </div>

        </div>
        
    </div>


</div>

`

export default OrganizationCreateTemplate