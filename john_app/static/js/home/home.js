$(document).ready(function(){
    let $counter = 1;
	var Home = {
		Init: function(config) {
			this.config = config;
			this.BindEvents();
		},
        BindEvents: function() {
			let $this = this.config;

                $this.btn_save.on('click', this.ClickMe );
                $this.tbl_user.on('click', '.btn-update',this.Update );
                $this.tbl_user.on('click', '.btn-delete',this.Remove );

		},
		Update: (e) => {
			let $self = Home.config;
				$tr = $self.tbl_user.find('tr#' + e.target.getAttribute('data-rowid')),
				$td = $tr.find('td');


				$self.fname.val( $td.eq(0).text() );
				$self.lname.val( $td.eq(1).text() );		
				
				$self.btn_save.val('update');
				$self.btn_save.attr('data-rowid', e.target.getAttribute('data-rowid'));

		},
		Remove: (e) => {
			let $self = Home.config;
				$self.tbl_user.find('tr#' + e.target.getAttribute('data-rowid')).remove();

		},
        ClickMe: () => {
			let $self = Home.config;
				
				if($self.btn_save.val() == 'save'){
					$self.tbl_user.append(`
						<tr id="${ $counter }">
							<td>${ $self.fname.val() }</td>
							<td>${ $self.lname.val() }</td>
							<td>
								<button class="btn btn-success btn-update" data-rowid="${ $counter }">update</button>
								<button class="btn btn-danger btn-delete" data-rowid="${ $counter }">delete</button>
							</td>
						</tr>				
					`);
					$counter++;
				}

				if($self.btn_save.val() == 'update'){
					let $rowid = $self.btn_save.attr('data-rowid');
					$tr = $self.tbl_user.find('tr#' + $rowid);
					$td = $tr.find('td');

					$td.eq(0).text( $self.fname.val() );
					$td.eq(1).text( $self.lname.val() );

					$self.btn_save.val('save');
				}

				$self.fname.val('');
				$self.lname.val('');
					
				
        },
	 
	}

	Home.Init({
         btn_save 	: $('#btn-save')
        ,fname 		: $('#fname')
        ,lname 		: $('#lname')
        ,tbl_user	: $('#tbl-user')
    })    

})





