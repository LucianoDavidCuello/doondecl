$templateCache.put("partials/app.dish-view.checkout.html", '<div class="container-fluid" ng-hide="checkout.isDish">
	No hay proceso de compra. vuelve atrás.
</div>

<div class="container-fluid" ng-show="checkout.isDish">
	<div class="col-md-8">
		<form stripe-form="stripeCallback" data-abide>
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">Pago</h3>
				</div>
				<div class="panel-body">
					<div class="col-md-6">

						<label>Número de la tarjeta</label>

						<div class="form-group has-feedback">
							<input
									id="paymentCard"
									class="form-control input-lg"
									ng-model="number"
									placeholder="---- ---- ---- ----"
									payments-format="card"
									payments-validate="card"
									required
									autofocus />
							<span class="fa fa-credit-card form-control-feedback"></span>
						</div>
						<label>Nombre del titular de la tarjeta</label>
						<a href="#" class="top"
						   data-placement="top"
						   data-toggle="tooltip"
						   data-original-title="Escribe el nombre tal cual y como aparece en tu tarjeta.">
							<span class="fa fa-question-circle"></span>
						</a>
						<div class="form-group has-feedback">
							<input
									id="cardHolderName"
									class="form-control input-lg"
									ng-model="name"
									required
									placeholder="Nombre y apellidos"
									autofocus />
							<span class="fa fa-user form-control-feedback"></span>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<label>Fecha de vencimiento</label>
								<div class="form-group has-feedback">
									<input class="form-control input-lg"
										   ng-model="expiry"
										   placeholder="MM/AA"
										   payments-format="expiry"
										   payments-validate="expiry"
										   required />
									<span class="fa fa-calendar-o form-control-feedback"></span>
								</div>
							</div>
							<div class="col-sm-6">
								<label>
									Código de Seguridad
									<a href="#" class="top"
									   data-placement="top"
									   data-toggle="tooltip"
									   data-original-title="El CVC son los 3 últimos dígitos del reverso de tu tarjeta.">
										<span class="fa fa-question-circle"></span>
									</a>
								</label>
								<div class="form-group has-feedback">
									<input class="form-control input-lg"
										   ng-model="cvc"
										   placeholder="CVC"
										   payments-format="cvc"
										   payments-validate="cvc"
										   payments-type-model="type"
										   required />
									<span class="fa fa-lock form-control-feedback"></span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="panel-footer">
					<span class="fa fa-lock"></span> Servidor seguro
					<a href="#" class="top"
					   data-placement="top"
					   data-toggle="tooltip"
					   data-original-title="Los datos de tu tarjeta son encriptados y no son alojados en nuestro servidor. La plataforma Stripe se encarga del procesamiento y cobro del dinero.">

						<span class="fa fa-question-circle"></span>
					</a>
				</div>

			</div><!--./ End payment panel -->

			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">Añade un mensaje a {{ checkout.chef.name }}, tu cocinero</h3>
				</div>
				<div class="panel-body">
					<div class="row">
						<div class="col-md-offset-1 col-md-10">
							<div class="alert alert-info text-center">
								<h4 ng-if="checkout.dish.delivery==\'location\'">No olvides indicar en el mensaje tu direccion de entrega del pedido. El cocinero te confirmará si está disponible para esa fecha y dirección.</h4>
								<h4 ng-if="checkout.dish.delivery==\'pickup\'">No olvides pedir al cocinero la dirección de recogida del pedido en el mensaje. </h4>
								<h4 ng-if="checkout.dish.delivery==\'home\'">El cocinero ofrece servicio de chef a domicilio. Indicale la dirección en la que deberá cocinar y todo lo que necesite saber para ese dia.</h4>
							</div>
							<h4 class="text-center">¿Tienes alergias, intolerancias, sin azucar, sin sal, sin gluten? Indica cualquier detalle especial al cocinero</h4>
						</div>
					</div>
					<div class="row">

						<div class="col-xs-2">
							<figure>
								<img  ng-src="{{ checkout.chef.photo }}" alt="{{ checkout.chef.name }}" class="img-circle img-responsive"
									  data-placement="top"
									  data-toggle="tooltip"
									  data-original-title="Tu cocinero, {{ checkout.chef.name }}"/>

							</figure>
						</div>
						<div class="col-xs-9">
							<div class="form-group has-feedback">
								</br>
								<textarea ng-model="checkout.order.message" class="form-control" rows="4" placeholder="Mensaje al cocinero"></textarea>
							</div>
						</div>
					</div>
				</div>
				<div class="panel-footer">
					<p>
						Clickando en "Reservar plato", estás de acuerdo con pagar la cantidad total mostrada a la derecha,
						la cuál incluye las tasas de servicio, y con <a href="/terms">los términos de servicio</a>.
					</p>
					<button type="submit" class="btn btn-primary btn-payment btn-block">
						<span class="fa fa-shopping-cart"></span>
						Reservar plato/menú
					</button>
					<br/>
					<p>
						Sólo te cobraremos esta cantidad si el cocinero acepta tu pedido. El cocinero tiene 24 horas para darte una
						respuesta. Si el cocinero la rechaza o no responde, no se realizará el cargo.
					</p>
				</div>
			</div>
		</form>
	</div>

	<div class="col-md-4">

		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">Resumen</h3>
			</div>
			<figure>
				<img class="img-responsive" ng-src="{{ checkout.dish.photo }}" alt="{{ checkout.dish.name }}" />
			</figure>
			<div class="panel-body">
				<h3>{{ checkout.dish.name }}</h3>
				<span>Cocinado por {{ checkout.chef.name }}</span>
				<hr/>

				<table class="table table-bordered">
					<tr>
						<td>
							<span class="fa fa-cutlery"></span> Cantidad de platos/menús
						</td>
						<td>
							{{ checkout.order.quantity }}
						</td>
					</tr>
					<tr>
						<td>
							<span class="fa fa-calendar"></span> Fecha de recogida/entrega
						</td>
						<td>
							{{ checkout.getLocalDate(checkout.order.date)}}
						</td>
					</tr>
					<tr>
						<td>
							<span class="fa fa-clock-o"></span> Hora
						</td>
						<td>
							{{ checkout.order.time }}
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<span class="fa fa-cube"></span> Método de Entrega
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<span ng-if="checkout.dish.delivery==\'location\'">El cocinero lo entrega donde estés.</span>
							<span ng-if="checkout.dish.delivery==\'pickup\'">Vas a recoger la comida a casa del cocinero.</span>
							<span ng-if="checkout.dish.delivery==\'home\'">El cocinero cocina en tu casa.</span>
						</td>
					</tr>
				</table>

				<hr/>
				<table class="table table-bordered">
					<tr>
						<td>{{ checkout.dish.price | currency:"&euro;" }} x {{ checkout.order.quantity }} platos/menús.</td>
						<td>{{ checkout.dish.price * checkout.order.quantity | currency:"&euro;" }}</td>
					</tr>
					<tr>
						<td>Servicio <a href="#" class="top"
										data-placement="top"
										data-toggle="tooltip"
										data-original-title="Esto es la tasa que cobra doondeapp e incluye impuestos">
							<span class="fa fa-question-circle"></span>
						</a></td>
						<td>{{ checkout.dish.fee | currency:"&euro;" }}</td>
					</tr>
					<tr>
						<td><h3>Total</h3></td>
						<td><h3>{{ (checkout.dish.price * checkout.order.quantity) + checkout.dish.fee | currency:"&euro;" }}

						</h3></td>
					</tr>
				</table>
			</div>
		</div>

	</div>

</div>
'), $templateCache.put("partials/app.dish-view.html", '<div class="container-fluid">

	<div class="col-md-9">
		<!-- Info about dish -->
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{ dish.details.name }}
				</h3>
			</div>

			<div class="row">
				<div class="col-sm-7">
					<!-- Dish Picture -->
					<figure class="img-responsive img-dish-cover">
						<img ng-src="{{ dish.details.photo }}" alt="{{ dish.details.description }}" />
					</figure>
				</div>
				<div class="col-sm-5">
					<!-- Dish form request -->
					<div class="contact-dish-form">
						<form name="requestDish" ng-submit="dish.requestDish()">

							<div class="row" id="requestDish-date">
								<div class="col-sm-12">
									<label>Para la fecha</label>
									<div class="form-group has-feedback">
										<input type="text"
												class="form-control input-lg"
												ng-model="dish.order.date"
												data-min-date="today"
												placeholder="Día"
												bs-datepicker
												required>
										<span class="fa fa-calendar form-control-feedback"></span>
									</div>
								</div>
							</div>

							<div class="row" id="requestDish-time">
								<div class="col-sm-6">
									<div class="form-group">
										<label><span class="fa fa-clock-o"></span> Hora aproximada</label><br>
										<input type="text"
												class="form-control input-lg"
												ng-model="dish.order.time"
												bs-timepicker
												data-time-type="string"
												placeholder="hh:mm"
												required>
									</div>

								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<label><span class="fa fa-cutlery"></span> Cantidad </label>
										<select class="form-control input-lg" ng-model="dish.order.quantity" ng-change="getFee(dish.details.price * dish.order.quantity)" required>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
											<option value="7">7</option>
											<option value="8">8</option>
											<option value="9">9</option>
											<option value="10">10</option>
											<option value="1">11</option>
											<option value="2">12</option>
											<option value="3">13</option>
											<option value="4">14</option>
											<option value="5">15</option>
											<option value="6">16</option>
											<option value="7">17</option>
											<option value="8">18</option>
											<option value="9">19</option>
											<option value="10">20</option>
										</select>
									</div>
								</div>
							</div>

							<div class="row" id="requestDish-invoice">
								<div class="col-sm-12">
									<table class="table table-bordered">
										<tr>
											<td>{{ dish.details.price | currency:"&euro;" }} x {{ dish.order.quantity }} platos/menús.</td>
											<td>{{ dish.details.price * dish.order.quantity | currency:"&euro;" }}</td>
										</tr>
										<tr>
											<td>Servicio <a href="#" class="top"
															data-placement="top"
															data-toggle="tooltip"
															data-original-title="Esto es la tasa que cobra doondeapp e incluye impuestos">
												<span class="fa fa-question-circle"></span>
											</a></td>
											<td>{{ dish.details.fee | currency:"&euro;" }}</td>
										</tr>
										<tr>
											<td>Total</td>
											<td>{{ (dish.details.price * dish.order.quantity) + dish.details.fee | currency:"&euro;" }}</td>
										</tr>
									</table>
								</div>
							</div>

							<button
									ng-show="dish.isAuthenticated()"
									type="submit"
									ng-disabled="requestDish.$invalid"
									class="btn btn-primary btn-block btn-payment">
								<span class="fa fa-shopping-cart"></span>
								Reservar comida
							</button>
							<a ng-show="!dish.isAuthenticated()" class="btn btn-default btn-block btn-payment" href="/login">Regístrate para reservar</a>
						</form>
					</div><!-- ./ contact-chef-form -->

				</div>
			</div>

			<div class="panel-body">
				<div class="row row-description">
					<span>{{ dish.details.price | currency:"&euro;" }} <small>por plato/menú</small></span>
				</div>


				<div class="row">
					<div id="dish-description" class="dish-description"></div>
					<br/>
				</div>

			</div>
		</div>


		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title"><span class="fa fa-comments"></span> Reviews</h3>
			</div>
			<div class="panel-body">
				<!-- list of reviews -->
				Reviews lists
			</div>
		</div>
	</div>

	<div class="col-md-3">
		<!-- Info about chef -->
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">Chef</h3>
			</div>
			<div class="panel-body text-center">
				<figure class="avatar-chef">
					<div class="img-chef"></div>
					<a ng-href="/user/{{ dish.details.chef._id }}">
						<img width="200" class="img-circle" ng-src="{{ dish.details.chef.avatar }}" alt="{{ dish.details.chef.displayName }}" />
					</a>
				</figure>
				<h4>{{ dish.details.chef.displayName}}</h4>
				<p>
					{{ dish.details.chef.biography }}
				</p>

			</div>
		</div>


		<!-- More dishes from the same chef -->
		<div class="panel panel-default" ng-show="dish.details.chef.dishes.length > 1">
			<div class="panel-heading">
				<h3 class="panel-title">Otros platos/menús del chef</h3>
			</div>
			<div class="panel-body text-center">
				<div class="preview panel panel-default" ng-repeat="dishItem in dish.details.chef.dishes">
					<a  ng-show="dish.details._id != dishItem._id" ng-href="/dish/{{ dishItem._id }}">
						<div ng-show="dish.details._id != dishItem._id" class="panel-heading">
							<h3 class="panel-title">{{ dishItem.name | limitTo: 23 }}</h3>
						</div>
						<figure  ng-show="dish.details._id != dishItem._id">
							<div class="image-inner-shadow"></div>
							<img class="dish-img-thumb" ng-src="{{ dishItem.photo }}" alt="{{ dishItem.description }}" />
						</figure>
					</a>
				</div>

			</div>
		</div>
	</div>

</div>
'), $templateCache.put("partials/app.edit.dish-view.html", '
<div class="container-fluid" ng-show="edit.isAuthenticated()">

	<div class="col-md-offset-2 col-md-8">
		<div class="panel panel-default">
			<div class="panel-body">

				<h2 class="text-center">Edita tu plato/menú</h2>

				<label>Nombre del plato/menú</label>
				<div class="form-group has-feedback">
					<input type="text" ng-model="edit.details.name" class="form-control input-lg">
					<span class="fa fa-cutlery form-control-feedback"></span>
				</div>

				<div class="row">
					<div class="col-sm-5">
						<label>Cambiar precio</label>
						<div class="form-group has-feedback">
							<input class="form-control input-lg" type="number" min="1" ng-model="edit.details.price" placeholder="Precio" required>
							<span class="fa fa-euro form-control-feedback"></span>
						</div>
					</div>
				</div>

				<label>Cambiar imagen</label>
				<!-- Image Crop -->
				<image-crop
					data-width="640"
					data-height="480"
					data-shape="square"
					data-result="imageCropResult"
					data-step="imageCropStep"
					ng-show="showImageCropper">
				</image-crop>
				<!--./end Image Crop -->

				<img ng-hide="showImageCropper" id="avatarPreview" class="img-profile-rounded" ng-src="{{ profile.user.avatar }}" alt="{{ profile.user.displayName }}" />
				<br>
				<div class="text-center">
					<button class="btn btn-info" ng-click="showImageCropper = true" ng-hide="showImageCropper">
						<span class="fa fa-camera"></span>
						Cambiar la imagen de tu plato/menú
					</button>
				</div>
				<br><br>

				<figure class="text-center">
					<img class="img-responsive img-rounded"
						 style="display:inline-block;"
						 id="dishImgPrev"
						 ng-hide="showImageCropper"
						 ng-src="{{ edit.details.photo }}"
						 alt="{{ edit.details.description }}" />
				</figure>
				<br>

				<label>Cambiar descripción</label>
				<div class="form-group has-feedback">
					<textarea ng-model="edit.details.description"
										rows="8"
										class="form-control"></textarea>
					<span class="fa fa-pencil-square-o form-control-feedback"></span>
				</div>

				<label>Cambiar zona</label>
				<div class="form-group has-feedback">
					<autocomplete-searchbar></autocomplete-searchbar>
				</div>

				<div class="text-center">
					<a href="#" class="btn btn-primary" ng-click="edit.updateDish(edit.details._id)">Actualizar</a>
				</div>

			</div>

		</div>
	</div>

</div>

<div class="container-fluid" ng-show="!edit.isAuthenticated()">
	<div class="alert alert-warning">
		<p class="text-center">
			No tienes permiso para editar el plato/menú seleccionado.
		</p>
	</div>
</div>
'), $templateCache.put("partials/app.main.html", '<form role="form" class="search-ontop-map" id="formSearch" ng-submit="loadMap()">
	<autocomplete-searchbar></autocomplete-searchbar>
</form>

<search-map></search-map>

<dish-list></dish-list>
'), $templateCache.put("partials/app.order-view.html", '<div class="container-fluid">
	<div class="row">

		<div class="col-md-8">

			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">
						Pedido
					</h3>
				</div>
				<div class="panel-body">

					<div class="row jumbotron">
						<div class="col-sm-4">
							<img class="img-rounded img-responsive"
									 ng-src="{{ order.details.dish.photo }}"
									 alt="{{ order.details.dish.name }}" />
						</div>
						<div class="col-sm-8">
							<table class="table">
								<tr>
									<td><span class="fa fa-cutlery"></span> Plato/Menú:</td>
									<td><h5>{{ order.details.dish.name }}</h5></td>
								</tr>
								<tr>
									<td><span class="fa fa-cutlery"></span> Cantidad:</td>
									<td><h5>{{ order.details.quantity }} plato/menú/s</h5></td>
								</tr>
								<tr>
									<td><span class="fa fa-calendar"></span> Fecha de entrega:</td>
									<td><h5>{{ order.getLocalDate(order.details.delivery.date) }}</h5></td>
								</tr>
								<tr>
									<td><span class="fa fa-cube"></span> Forma de entrega:</td>
									<td>
										<h5>
											<span ng-if="order.details.delivery.type == \'location\'">El cocinero lo entrega donde estés.</span>
											<span ng-if="order.details.delivery.type == \'pickup\'">Vas a recoger la comida a casa del cocinero.</span>
											<span ng-if="order.details.delivery.type == \'home\'">El cocinero cocina en tu casa.</span>
										</h5>
									</td>
								</tr>
							</table>
						</div>
					</div>

					<div ng-if="order.details.dish.chef !== order.me._id">
						<div class="row text-center" ng-if="order.details.state == \'pendingClient\'">

							<button class="btn btn-success"  ng-click="order.willingAccept = true">
								<span class="fa fa-check"></span>
								Aceptar cambio de fecha
							</button>
							<br/><br/>
						</div>
						<!-- Form to accept changeOfDate -->
						<div class="row" ng-show="order.willingAccept">
							<form name="acceptOrder" ng-submit="order.accept()">
								<div class="col-sm-offset-2 col-sm-8 alert alert-success">
									<p>
										Aceptando estas de acuerdo con el cambio de fecha para tu pedido.
									</p>
									<br/>
									<button type="submit" class="btn btn-success btn-block">
										<span class="fa fa-thumbs-up"></span>
										Aceptar
									</button>
									<br/><br/>
								</div>
							</form>
						</div>

					</div>


					<div ng-if="order.details.dish.chef == order.me._id">
						<div class="row text-center" ng-if="order.details.state == \'pendingCook\'">
							<p>
								¿Que deseas hacer a continuación?
							</p>
								<button class="btn btn-success"  ng-click="order.willingAccept = true; order.willingPostpone = false">
									<span class="fa fa-check"></span>
									Aceptar pedido
								</button>
								<button class="btn btn-warning"  ng-click="order.willingPostpone = true; order.willingAccept = false">
									<span class="fa fa-calendar"></span>
									Proponer otra fecha
								</button>
								<!--<button class="btn btn-info" ng-click="order.continue = true; order.accepted = false; order.posponed = false">
									<span class="fa fa-comment"></span>
									Continuar hablando
								</button>-->
							<br/><br/>
						</div>
						<!-- Form to accept the order -->
						<div class="row" ng-show="order.willingAccept">
							<form name="acceptOrder" ng-submit="order.accept()">
								<div class="col-sm-offset-2 col-sm-8 alert alert-success">
									<p>
										Aceptando te comprometes entregar tu plato/menú para la fecha y la forma
										de entrega acordadas
									</p>
									<br/>
									<button type="submit" class="btn btn-success btn-block">
										<span class="fa fa-thumbs-up"></span>
										Aceptar
									</button>
								</div>
							</form>
						</div>

						<!-- Form to propose another date -->
						<div class="row" ng-show="order.willingPostpone">
							<form name="proposeDate" ng-submit="order.proposeDate()">
								<div class="row">
									<div class="col-sm-offset-2 col-sm-6">
										<label><span class="fa fa-calendar"></span> Nueva Fecha</label>
										<div class="form-group has-feedback">
											<input type="text"
														 class="form-control input-lg"
														 ng-model="order.newDate.date"
														 data-min-date="today"
														 bs-datepicker
														 placeholder="Día"
														 required	/>
										</div>
									</div>

									<div class="col-sm-2">
										<div class="form-group">
											<label><span class="fa fa-clock-o"></span> Hora</label>
											<input type="text"
												   class="form-control input-lg"
												   ng-model="order.newDate.time"
												   bs-timepicker
												   data-time-type="string"
												   placeholder="hh:mm" required>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-offset-2 col-sm-8">
										<button
												type="submit"
												ng-disabled="proposeDate.$invalid"
												class="btn btn-primary btn-block">
											Enviar
										</button>
									</div>
								</div>
							</form>
						</div>

						<hr/>
					</div>
					<!-- Previous Message list and form to add new message -->
					<div class="row">
						<div class="col-xs-2 text-center">
							<img width="64px" class="img-circle" ng-src="{{ order.me.avatar }}" alt="foto">
							<br/>
							<small>{{ order.me.displayName }}</small>
						</div>
						<div class="col-xs-10">
							<form name="newMessage" ng-submit="order.sendMessage()">
								<div class="form-group">
									<textarea class="form-control"
														ng-model="order.message.new"
														rows="4"
														placeholder="Para continuar hablando, deja un mensaje aquí"
														required></textarea>
								</div>
								<button type="submit"
												ng-disabled="newMessage.$invalid"
												class="btn btn-primary btn-block">
										Enviar
								</button>
							</form>
						</div>
					</div>

					<div ng-if=\'order.details.state === "okCook"\' class="alert alert-success">
						<p class="text-center">
							<span class="fa fa-thumbs-up fa-2x"></span> Pedido aceptado
						</p>
					</div>

					<hr/>
					<div class="row" ng-repeat="msg in order.messages | orderBy: \'-date\'">
							<div class="row">
							<div class="col-xs-2 text-center">
								<img ng-src="{{ msg.from.avatar }}" alt="" class="img-circle" width="64px" />
								<br/>
								<small>{{ msg.from.displayName }}</small>
							</div>
							<div class="col-xs-10">
								<h5 class="triangle-border left">
									{{ msg.text }}
								</h5>
								<small><span class="fa fa-calendar"></span> {{ order.getLocalDate(msg.date.utc) | date:"medium" }}</small>
							</div>
							</div>
							<div class="row">
							<hr/>
							</div>

					</div>

				</div>
			</div>

		</div>

		<div class="col-md-4">
			<!-- Perfil del otro usuario -->
		</div>
	</div>
</div>
'), $templateCache.put("partials/app.user-profile.html", '<div class="container-fluid">

<div ng-show="user.isUser" class="row">

	<div class="col-md-4 col-lg-3">
		<div class="panel panel-default text-center">
			<div class="panel-heading">
				<h3 class="panel-title">{{ user.profile.displayName }}</h3>
			</div>
			<div class="panel-body">
				<figure class="avatar-chef">

					<div ng-show="user.profile.statusChef" class="img-chef"></div>
					<img class="img-circle" ng-src="{{ user.profile.avatar }}" alt="{{ user.profile.displayName }}" />
				</figure>
				<h4>Sobre mi</h4>
				<p>
					{{ user.profile.biography }}
				</p>
			</div>
		</div>
	</div>

	<div class="col-md-8 col-lg-9">

		<div class="row">
			<div class="col-xs-12">
				<div ng-show="user.profile.dishes.length > 0 || user.profile.statusChef" class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title"><span class="fa fa-cutlery"></span> Platos/menús listados</h3>
					</div>
					<div class="panel-body">
						<!-- Dishes list by User -->
						<div class="col-xs-12 col-sm-6 col-lg-4" style="height:300px" ng-repeat="dish in user.profile.dishes">

							<div class="preview panel panel-default">
								<div class="panel-heading">
									<h3 class="panel-title">{{ dish.name | limitTo: 23 }}</h3>
								</div>

								<a ng-href="/dish/{{ dish._id }}">
								<figure>
									<div class="image-inner-shadow"></div>
									<img class="dish-img-thumb" ng-src="{{ dish.photo }}" alt="" />
								</figure>

								<div class="panel-body">
									<div class="dish-price">
										<span class="price">{{ dish.price | currency:"&euro;" }}</span>
									</div>
									<p>{{ dish.description | limitTo: 72 }}</p>
								</div>
								</a>
								<div class="panel-footer">
									<span class="fa fa-map-marker"></span> <em>{{ dish.locationText }}</em>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-12">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title"><span class="fa fa-comments"></span> Reviews</h3>
					</div>
					<div class="panel-body">
						<!-- ngRepeat for reviews[] -->
					</div>
				</div>
			</div>
		</div>

	</div>

</div>
</div>
'), $templateCache.put("partials/auth/forgot-password-form.html", '<div class="container background-cover">
	<div class="row">
		<div class="center-form panel">
			<div class="panel-body">
				<h2 class="text-center">Cambia tu contraseña</h2>
				<form method="post" ng-submit="forgot.reset()" name="resetForm">

					<div class="form-group has-feedback" ng-class="{ \'has-error\' : resetForm.password.$invalid && resetForm.password.$dirty }">
						<input password-strength class="form-control input-lg" type="password" name="password" ng-model="forgot.password" placeholder="Nueva contraseña" required>
						<span class="fa fa-lock form-control-feedback"></span>
						<div class="help-block text-danger" ng-if="resetForm.password.$dirty" ng-messages="resetForm.password.$error">
							<div ng-message="required">La contraseña es obligatoria.</div>
						</div>
					</div>

					<button type="submit" ng-disabled="resetForm.$invalid" class="btn btn-lg btn-block btn-primary">Cambiar contraseña</button>
				</form>
			</div>
		</div>
	</div>
</div>
'), $templateCache.put("partials/auth/forgot-password.html", '<div class="container background-cover">
	<div class="row">
		<div class="center-form panel">
			<div class="panel-body">
				<h2 class="text-center">¿Has olvidado tu contraseña?</h2>

				<form method="post" ng-submit="forgot.submit()" name="forgotForm">
					<p class="text-center">
						Introduce tu dirección de email a continuación y te enviaremos las
						intrucciones para resetear tu contraseña.
					</p>
					<div class="form-group has-feedback">
						<input class="form-control input-lg" type="text" name="email" ng-model="forgot.email" placeholder="Tu Email" required autofocus>
						<span class="fa fa-envelope form-control-feedback"></span>
					</div>

					<button type="submit" ng-disabled="forgotForm.$invalid" class="btn btn-lg btn-block btn-primary">
						<span class="fa fa-key"></span> Resetear Contraseña
					</button>
				</form>

			</div>
		</div>
	</div>
</div>
'), $templateCache.put("partials/auth/login.html", '<div class="container background-cover">
  <div class="row">
    <div class="center-form panel">
      <div class="panel-body">
        <h2 class="text-center">Entra</h2>

        <button class="btn btn-block btn-facebook" ng-click="login.authenticate(\'facebook\')">
          <i class="fa fa-facebook"></i> Conéctate con Facebook
        </button>
        <br/>
        <div class="signup-or-separator">
          <h6 class="text">o</h6>
          <hr>
        </div>

        <form method="post" ng-submit="login.login()" name="loginForm">
          <div class="form-group has-feedback">
            <input class="form-control input-lg"
									 type="text"
									 name="email"
									 ng-model="login.email"
									 placeholder="Introduce tu email"
									 required
									 autofocus>
            <span class="fa fa-envelope form-control-feedback"></span>
          </div>

          <div class="form-group has-feedback">
            <input class="form-control input-lg"
									 type="password"
									 name="password"
									 ng-model="login.password"
									 placeholder="Y tu contraseña"
									 required>
            <span class="fa fa-lock form-control-feedback"></span>
          </div>

          <button type="submit" ng-disabled="loginForm.$invalid" class="btn btn-lg btn-block btn-primary">Entra</button>

          <br/>

          <p class="text-center">
            <a href="/forgot">¿Has olvidado tu contraseña?</a>
          </p>

          <p class="text-center text-muted">
            <small>¿Aún no estás registrado? <a href="/signup">Abre tu cuenta aquí.</a></small>

        <!--<button class="btn btn-block btn-google-plus" ng-click="login.authenticate(\'google\')">
          <span class="fa fa-google-plus"></span> Sign in with Google
        </button>-->
      </div>
    </div>
  </div>
</div>
'), $templateCache.put("partials/auth/signup.html", '<div class="container background-cover">
  <div class="row">
    <div class="center-form panel">
      <div class="panel-body">
        <h2 class="text-center">Únete</h2>

          <button class="btn btn-block btn-facebook" ng-click="signup.authenticate(\'facebook\')">
              <i class="fa fa-facebook"></i> Únete con Facebook
          </button>
          <br/>

          <div class="signup-or-separator">
              <h6 class="text">o</h6>
              <hr>
          </div>

          <form method="post" ng-submit="signup.signup()" name="signupForm">
          <!--<div class="form-group has-feedback" ng-class="{ \'has-error\' : signupForm.fullName.$invalid && signupForm.fullName.$dirty }">
            <input class="form-control input-lg" type="text" name="displayName" ng-model="signup.displayName" placeholder="Escribe tu nombre" required autofocus>
            <span class="fa fa-user form-control-feedback"></span>
            <div class="help-block text-danger" ng-if="signupForm.fullName.$dirty" ng-messages="signupForm.fullName.$error">
              <div ng-message="required">Debes introducir un nombre.</div>
            </div>
          </div>-->

          <div class="form-group has-feedback" ng-class="{ \'has-error\' : signupForm.email.$invalid && signupForm.email.$dirty }">
            <input class="form-control input-lg"
									 type="email"
									 id="email"
									 name="email"
									 onchange="angular.element(this).scope().storeFields()"
									 ng-model="signup.email"
									 placeholder="Tu email"
									 required
                   ng-pattern="/^[A-z]+[a-z0-9._]+@[a-z0-9]+\\.[a-z.]{2,5}$/">
            <span class="fa fa-envelope form-control-feedback"></span>
            <div class="help-block text-danger" ng-if="signupForm.email.$dirty" ng-messages="signupForm.email.$error">
              <div ng-message="required">Es necesario que introduzcas tu email.</div>
              <div ng-message="pattern">Dirección de email inválida.</div>
            </div>
          </div>

          <div class="form-group has-feedback" ng-class="{ \'has-error\' : signupForm.password.$invalid && signupForm.password.$dirty }">
            <input password-strength class="form-control input-lg" type="password" name="password" ng-model="signup.password" placeholder="Y una contraseña" required>
            <span class="fa fa-lock form-control-feedback"></span>
            <div class="help-block text-danger" ng-if="signupForm.password.$dirty" ng-messages="signupForm.password.$error">
              <div ng-message="required">La contraseña es obligatoria.</div>
            </div>
          </div>



          <p class="text-center text-muted">
            <small>Registrándote, estás de acuerdo los <a href="/terms">términos y condiciones</a> del servicio.
                   y la <a href="/cookies">política de privacidad.</a>
            </small>
          </p>

          <button type="submit" ng-disabled="signupForm.$invalid" class="btn btn-lg btn-block btn-primary">Regístrate</button>
          <br/>

          <p class="text-center text-muted">¿Ya estás registrado? <a href="/login">Entra desde aquí</a></p>
        </form>
      </div>
    </div>
  </div>
</div>
'), $templateCache.put("partials/directives/directive.autocompleteSearchbar.html", '
<div class="form-group has-feedback">
  <input type="text"
         id="searchTextField"
         class="form-control input-lg"
         placeholder="¿Donde estás? encontraremos descuentos cerca de ti."
         required/>
  <span class="fa fa-search fa-lg form-control-feedback"></span>
</div>


'), $templateCache.put("partials/directives/directive.cookies.html", '<!-- Cookie EU law -->
<div id="cookies">
	Este sitio web utiliza cookies para mejorar tu experiencia de navegación.
	<a href="/cookies">Política de cookies</a>.
	<button class="btn btn-default btn-xs">Aceptar</button>
</div>
'), $templateCache.put("partials/directives/directive.dishlist.html", '
<div class="container-fluid margin-top-65">
	<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12" ng-repeat="dish in list.dishes">
		<div class="preview panel panel-default" ng-show="true">
			<div class="panel-heading">
				<h3 class="panel-title">{{ dish.promo_titulo | truncate: 30 }}</h3>
			</div>

			<a ng-href="/dish/{{ dish.promo_id }}">
			<figure>
				<div class="image-inner-shadow"></div>
				<img class="dish-img-thumb" ng-src="{{ dish.promo_imagen | reformatUrl }}" alt="" />
			</figure>

			<div class="panel-body">
				<div class="dish-price">
					<span class="price">{{ dish.promo_precio | currency:"$" }}</span>
				</div>
				<p class="promo_desc">{{ dish.promo_texto | truncate: 200 }}</p>
			</div>
			</a>

			<a ng-href="/user/{{ dish.negocio_id }}">
			<div class="panel-footer">
				<div class="media">
					<div class="pull-left">
						<img class="img-rounded" ng-src="{{ dish.negocio_logo }}" >
					</div>
					<div class="media-body ng-binding">
						{{ dish.negocio_nombre | truncate: 18 }}<br>
						<em class="ng-binding">{{ dish.negocio_direccion | truncate: 80 }}</em>
					</div>
				</div>
			</div>
			</a>

		</div>
	</div>

</div>
'), $templateCache.put("partials/directives/directive.footer.html", '<footer class="Footer">
	<div class="Footer-brand">doondeapp &copy; 2015</div>
	<div class="Footer-links">
    <a href="facebook"><span class="fa fa-facebook"></span></a>
    <a href="https://doondeapp.co/twitter"><span class="fa fa-twitter"></span></a>
    <a href="https://doondeapp.co/instagram"><span class="fa fa-instagram"></span></a>
    <a href="https://doondeapp.co/gplus"><span class="fa fa-google-plus"></span></a>

    <a href="mailto:support@doondeapp.co">Contacto</a>
		<a href="https://doondeapp.co/blog">Blog</a>
    <a href="/terms">Términos</a>
    <a href="/faq">FAQ</a>
	</div>
	<div class="Footer-love">
		<span class="fa fa-code"></span> with <span class="fa fa-heart"></span> in Madrid.
	</div>
</footer>
'), $templateCache.put("partials/directives/directive.navbar.html", '


<div class="navbar navbar-default navbar-static-top">
	<div class="navbar-header">
		<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
			<span class="fa fa-bars"></span>
		</button>
		<a ui-sref="app" class="navbar-brand">Doonde</a>
	</div>

	<div class="navbar-collapse collapse">
		
		<ul ng-if="!navbar.isAuthenticated()" class="nav navbar-nav pull-right">
			<li><a href="/login"><span class="fa fa-sign-in"></span> Entra</a></li>
			<li><a href="/signup"><span class="fa fa-pencil-square-o"></span> Únete</a></li>
			<li><a class="btn btn-primary btn-navbar" href="/upload/1">
				<span class="fa fa-map-marker"></span>
				Agrega tu negocio
			</a></li>
		</ul>
		<ul ng-if="navbar.isAuthenticated()" class="nav navbar-nav pull-right" ng-init="navbar.getProfile()">
			<li>
				<a ng-show="navbar.user.orders.length > 0"
					 href="/profile/messages">
					<span class="fa fa-envelope-o"></span>
					<!-- data-placement="bottom"
					 data-content="Tienes {{ navbar.user.orders.length }} mensajes sin leer."
					 data-animation="am-flip-x"
					 data-auto-close="1"
					 bs-popover>

					<span class="badge progress-bar-danger">{{ navbar.user.orders.length }}</span>-->
				</a>
				<a ng-show="navbar.user.orders.length === 0"
					href="/profile/messages"
					data-placement="bottom"
					data-content="No tienes mensajes nuevos."
					data-animation="am-flip-x"
					data-auto-close="1"
					bs-popover>
					<span class="fa fa-envelope-o"></span>
				</a>
			</li>
			<li ng-if="navbar.user.dishes.length > 0">
				<a href="/profile/dishes"><img class="nav-avatar" ng-src="{{ navbar.user.avatar }}" alt="" /> Mi cuenta</a>
			</li>
			<li ng-if="navbar.user.dishes.length < 1">
				<a href="/profile/messages"><img class="nav-avatar" ng-src="{{ navbar.user.avatar }}" alt="" /> Mi cuenta</a>
			</li>
			<li><a href="/logout"><span class="fa fa-sign-out"></span> Salir</a></li>
			<li><a class="btn btn-primary btn-navbar" href="/upload/1">
				Agrega tu negocio
			</a></li>
		</ul>
	</div>

</div>
'), $templateCache.put("partials/directives/directive.searchmap.html", '<section id="map">
<p>
  {{ test }}
</p>

<div ng-repeat="marker in myMarkers"
     ui-map-marker="myMarkers[$index]"
     ui-event="{ \'map-click\': \'openMarkerInfo(marker)\' }">
</div>

  <div ui-map-info-window="myInfoWindow" class="info-window text-center">

    <div class="row">
      <h4>
        <a href="/dish/{{ dishMarker._id }}">{{ dishMarker.name | limitTo: 18}}</a>
      </h4>
      <figure>
        <a href="/dish/{{ dishMarker._id }}">
          <img width="250px" class="img-rounded" ng-src="{{ dishMarker.photo }}" alt="" />
        </a>
      </figure>
    </div>

    <br/>

    <div class="row well well-sm">
      <div class="col-xs-3">
        <a href="/user/{{ dishMarker.chef._id }}">
          <img width="42px" ng-src="{{ dishMarker.chef.avatar }}" class="img-circle" alt="" />
        </a>
      </div>
      <div class="col-xs-5">
        <h5>{{ dishMarker.chef.displayName }}</h5>
      </div>
      <div class="col-xs-2">
        <h4>{{ dishMarker.price | currency:"&euro;" }}</h4>
      </div>
    </div>

  </div>

  <div ui-map="myMap"
       ui-options="mapOptions"
       ui-event="{ \'map-idle\': \'loadMap()\' }"
       class="map">
  </div>

</section>
'), $templateCache.put("partials/home/home.cookies.html", '<div class="container">
  <h2 class="text-center">Política de Cookies</h2>

  <h3>DEFINICIÓN Y FUNCIÓN DE LAS COOKIES</h3>
  <p>
    <strong>¿Qué son las cookies?</strong> Una cookie es un fichero
    que se descarga en su ordenador al acceder a determinadas
    páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.

  </p>
  <p>
    En carlosazaustre.es las utilizamos para personalizar la experiencia dentro de nuestra web, facilitar la navegación y analizar el comportamiento de los usuarios que nos visitan. Es importante destacar que el uso de cookies no proporciona datos personales del usuario, que de cara a carlosazaustre.es permanece anónimo.
  </p>

  <h3>¿QUÉ TIPOS DE COOKIES UTILIZA ESTA PÁGINA WEB?</h3>
  <ul>
    <li><strong>Cookies propias:</strong> Son aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.</li>
    <li><strong>Cookies de tercero:</strong> Son aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.</li>
    <li><strong>Cookies de análisis:</strong> Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos. Más información sobre la política de privacidad de estas herramientas de analítica en: Google Analytics.</li>
    <li><strong>Cookies publicitarias:</strong> Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.</li>
    <li><strong>Cookies de publicidad comportamental:</strong> Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.
    En carlosazaustre.es las cookies nunca irán asociada a ningún dato de carácter personal que pueda identificarle. Dichas cookies sólo serán utilizadas con propósitos estadísticos que ayuden a la optimización de la experiencia de los usuarios en el sitio.</li>

  </ul>

  <h3>REVOCACIÓN Y ELIMINACIÓN DE COOKIES</h3>
  <p>
    Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. Estas son las instrucciones para configurar las cookies en los principales navegadores:
  </p>
  <ul>
    <li><strong>Chrome:</strong> Configuración -> Mostrar opciones avanzadas -> Privacidad -> Configuración de contenido.
    Para más información, puede consultar el soporte de Google o la Ayuda del navegador.
    </li>
    <li><strong>Firefox:</strong> Herramientas -> Opciones -> Privacidad -> Historial -> Configuración Personalizada.
    Para más información, puede consultar el soporte de Mozilla o la Ayuda del navegador.
    </li>
    <li><strong>Internet Explorer:</strong> Herramientas -> Opciones de Internet -> Privacidad -> Configuración.
    Para más información, puede consultar el soporte de Microsoft o la Ayuda del navegador.
    </li>
    <li><strong>Safari:</strong> Preferencias -> Seguridad.
    Para más información, puede consultar el soporte de Apple o la Ayuda del navegador
    </li>
  </ul>
</div>
'), $templateCache.put("partials/home/home.faq.html", '<div class="container">
    <h2 class="text-center">F.A.Q</h2>
    <h4>
        ¿Qué es doondeapp?
    </h4>
    <p>
        doondeapp es un marketplace de comida casera. Una plataforma online para conectar usuarios que buscan platos/menús caseros, con cocineros
        locales dispuestos a ofrecerselos!
    </p>
    </br>
    <h4>
        Entonces, doondeapp es un restaurante ¿verdad?
    </h4>
    <p>
        Nop. doondeapp es una plataforma online para amantes de la comida casera. doondeapp es un mero intermediario de servicios
        entre usuarios y cocineros, y no ofrece servicios de catering, preparación o entrega de su comida.
    </p>
    </br>

    <h3 class="text-center">
        Para cocineros
    </h3>
    <hr>
    <h4>
        ¿Cómo puedo unirme a la Comunidad de cocineros de doondeapp?
    </h4>

    <p>
        Solo tienes que entrar a la web doondeapp.com y crear tu perfil de cocinero. Tras indicar los datos solicitados  ¡podrás comenzar
        a subir tus platos y menús estrella!
    </p>
    </br>
    <h4>
        Soy aficionado a la cocina y me salen unos platos ¡riquísimos! ¿Puedo también crear mi perfil de cocinero en doondeapp?
    </h4>
    <p>
        ¡Por supuesto! De hecho en doondeapp siempre hemos creido que la comida casera que recordamos haber comido de niños en nuestros
        hogares es la que más nos apetece volver a comer! Asi que si puedes cocinarla serás mas que bienvenido en doondeapp!

    </p>
    </br>


    <h4>
        ¿Como cocinero de doondeapp, puedo fijar el precio que deseo percibir por mis platos y menús?
    </h4>
    <p>
        ¡Por supuesto! En doondeapp cada cocinero elegirá, a la hora de anunciar un plato o menú, el importe que desea recibir por el mismo.
    </p>
    </br>
    <h4>
        Darse visibilidad con un perfil de cocinero en doondeapp, ¿es totalmente gratuito?
    </h4>
    <p>
        Eso es, como cocinero recibirás el importe integro de lo que has indicado que deseas recibir
        por cada uno de tus platos o menús en la plataforma doondeapp. Asi que para los cocineros doondeapp
        es totalmente gratuito!
    </p>
    </br>
    <h4>
        Como cocinero, ¿cuándo recibiré el dinero asociado a  un pedido que he completado?
    </h4>
    <p>
        Tras cada pedido doondeapp emitirá una transferencia bancaria a la cuenta que deberás haber indicado en
        tu perfil de cocinero, una vez la plataforma que gestiona los pagos haga llegar a doondeapp la cantidad asociada a
        dicho pedido (esto sucede típicamente a los 7 días de que se haga el cargo al cliente por el pedido), y siempre
        y cuando el servicio se haya completado y no exista ninguna reclamación interpuesta al respecto.
    </p>
    </br>
    <h4>
        ¿Puedo dejar mi valoración del usuario o cocinero después de la realizacion del servicio?
    </h4>
    <p>
        Para doondeapp la calidad es un aspecto muy importante por lo que te animamos
        a que tras la fecha de realización del servicio dejes tu valoración del usuario o cocinero con el que contrataste
        el servicio a traves de la plataforma doondeapp.co. Tu opinión aporta valor y calidad y es muy importante para
        los futuros usuarios contratantes del mismo servicio. Asi que ¡no lo olvides! ¡Valora a los demás usuarios!
    </p>
    </br>
    <h4> Como cocinero, ¿cuánto tiempo tengo para contestar a un usuario que me pida un plato o menú? </h4>
    <p>
        Debes contestar al cliente ¡tan pronto como puedas! doondeapp se basa en la comunicación entre
        usuarios contratantes y cocineros. Es importante que des una respuesta sobre tu disponibilidad incluso para notificar
        que no estas disponible en esa ocasión ya que el usuario está esperando una respuesta. Ten en cuenta que doondeapp resaltará
        en la plataforma a los cocineros más activos.
    </p>
    <p>
        Al confirmar que tu plato/menú está disponible para la fecha solicitada y concretados todos los demás detalles
        del servicio con el cliente (entrega, recogida etc), el cliente podrá proceder a comprar tu plato/menú desde doondeapp y tu recibirás un
        mensaje como notificación en la plataforma. A partir de ese momento,
        ¡puedes ponerte manos a la obra con la elaboracion de tu deliciosa comida casera! Y recuerda, el cliente
        dejará un comentario sobre tu plato/menú en la plataforma después de degustarlo, asi que es muy importante que cuides
        mucho todos los detalles, calidad, ingredientes, presentación. ¡Estamos seguros de que el resultado será increible! ¡Bienvenidos a doondeapp!

    </p>
    </br>

    <h3 class="text-center">
       Para clientes
    </h3>
    <hr>
    <h4>
        Si estoy en casa o en la oficina y me apetece comida casera ¿puedo buscar en doondeapp de manera gratuita?
    </h4>
    <p>
        ¡Claro! Puedes entrar en la web doondeapp.co y consultar qué platos/menús y qué cocineros de doondeapp tienes a tu alrededor. Contacta con
        el cocinero elegido para consultarle por la disponibilidad, precio y modo de entrega del plato/menú que deseas!
    </p>
    </br>
    <h4>
        ¿Puedo comprar mi plato o menú con anterioridad al día en que deseo consumirlo?
    </h4>
    <p>
        Desde luego, solo tienes que contactar con el cocinero en su perfil de doondeapp y verificar si estará disponible ese
        día, para a continuación pasar al proceso de compra en la plataforma.
    </p>
    </br>
    <h4>
        ¿Tendré como usuario que recoger el pedido o me lo entregará el cocinero?
    </h4>
    <p>
        Los términos del Servicio se acordarán entre el usuario y el cocinero. En el perfil de doondeapp el cocinero indicará
        sus preferencias en cuanto a esta cuestión y tú como usuario podrás elegir la que más se adecúe a tus necesidades!
    </p>
    </br>
    <h4>
        ¿Cuándo pagará el cliente?
    </h4>
    <p>
        Una vez el cocinero confirme la disponibilidad del plato/menú para la fecha deseada se cobrará al cliente el precio de la orden realizada.
    </p>
    </br>


</div>
'), $templateCache.put("partials/home/home.html", '
<header class="Header">
  <!--<figure class="Header-brand-img">
    <img src="http://doondeapp.com/img/logo.png" alt="DoondeApp" />
  </figure>-->
  <h1 class="Header-brand-h1">
    <img  src="http://doondeapp.com/img/logo.png" alt="" />
  </h1>
	<h2 class="Header-brand-h2">NO IMPORTA DONDE ESTÉS,<br> LO ENCONTRAMOS POR TI</h2>

  <div class="search-bar">
    <form role="form" id="formSearch">
      <autocomplete-searchbar></autocomplete-searchbar>
    </form>
  </div>

  <div class="landing-video">
		<img src="http://doondeapp.com/img/fondo2.jpg">
	</div>

  <!--<nav class="Header-loginlinks">
		<ul>
			<li><a href="/login" class="linkToLoginForm">Entrar</a></li>
			<li><a href="/signup" class="linkToRegisterForm">Crea una cuenta</a></li>
		</ul>
	</nav>-->

  <span class="bottom-arrow fa-stack fa-lg" ng-click="scrollDown()">
    <i class="fa fa-circle fa-stack-2x"></i>
    <i class="fa fa-angle-double-down fa-stack-1x fa-inverse"></i>
  </span>

</header>


<!-- Marketing copy -->
<div class="container-fluid bg-landing bg-gray">
  <div class="container">
    <div class="row text-center">
      <div class="col-sm-3">
        <span class="marketing fa fa-tags"></span>
        <h2>Descuentos</h2>
        <p>
          Descuentos y promociones al instante y tolamente gratis.
        </p>
      </div>
      <div class="col-sm-3">
        <span class="marketing fa fa-map-marker"></span>
        <h2>Localización</h2>
        <p>
          Doonde te permite seleccionar las ofertas que tienes cerca de tí,
        </p>
      </div>
      <div class="col-sm-3">
        <span class="marketing fa fa-gift"></span>
        <h2>Promociones</h2>
        <p>
          Disfruta de descuentos y regalos que premian tu fidelidad.
        </p>
      </div>
      <div class="col-sm-3">
        <span class="marketing fa fa-print">  
</span>
        <h2>Sin imprimir</h2>
        <p>
			Olvídate de imprimir cupones y de llevar encima tarjetas de fidelización.
      </div>
    </div>
  </div>
</div>

<!-- People said about us -->
<div id="peopleSaid" class="container-fluid bg-landing">
  <div class="container">
    <div class="row">
      <h2>Lo que dicen de nosotros</h2>
      <div class="col-sm-3">
        <blockquote
                class="twitter-tweet"
                data-conversation="none"
                data-cards="hidden"
                data-partner="tweetdeck">
          <p><a href="https://twitter.com/doondeappApp">@doondeappApp</a> es una gran idea, a muchos les vendría muy bien para tener tupper de calidad</p>&mdash; Mario (@mrbqr)
          <a href="https://twitter.com/mrbqr/statuses/398702727439863808">November 8, 2013</a>
        </blockquote>
      </div>
      <div class="col-sm-3">
        <blockquote
                class="twitter-tweet"
                data-conversation="none"
                data-cards="hidden"
                data-partner="tweetdeck">
          <p><a href="https://twitter.com/doondeappApp">@doondeappApp</a> Me parece una idea cojonuda</p>&mdash; a1tinta.es (@a1tinta) <a href="https://twitter.com/a1tinta/statuses/373119996274040833">August 29, 2013</a>
        </blockquote>
      </div>
      <div class="col-sm-3">
        <blockquote
                class="twitter-tweet"
                lang="es">
          <p><a href="https://twitter.com/doondeappApp">@doondeappApp</a> proyecto chulisimo! Muchisima suerte!</p>&mdash; Ivan Gomez Deza (@ivan_gomez_deza) <a href="https://twitter.com/ivan_gomez_deza/statuses/471710485625442305">Mayo 28, 2014</a>
        </blockquote>
      </div>
      <div class="col-sm-3">
        <blockquote
                class="twitter-tweet"
                data-conversation="none"
                data-cards="hidden"
                data-partner="tweetdeck">
          <p><a href="https://twitter.com/doondeappApp">@doondeappApp</a> WTF… no es que me guste un poco es que me gusta MUCHO… genial!</p>&mdash; LuXo (@unluxo) <a href="https://twitter.com/unluxo/statuses/373116705096335360">August 29, 2013</a>
        </blockquote>
      </div>
    </div>
    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
  </div>
</div>

<!-- Partners -->
<div class="container-fluid bg-landing">
	<div class="container">
		<div class="row text-center">
			<a href="//www.coursera.org/course/startup"><img width="100px" src="assets/stanford_logo.png" alt="" /></a> &nbsp;&nbsp;&nbsp;
			<a href="//tetuanvalley.com/"><img width="100px" src="assets/tetuan_logo.png" alt="" /></a> &nbsp;&nbsp;&nbsp;
      <a href="//www.sharingespana.es"><img width="200px" src="assets/logo-sharing.png" alt=""></a> &nbsp;&nbsp;&nbsp;
      <a href="//developers.google.com/startups/"><img width="200px" src="assets/google_logo.png" alt="" /></a> &nbsp;&nbsp;&nbsp;
      <a href="//cadenaser.com/ser/2014/11/16/ciencia/1416130647_479882.html"><img width="100px" src="assets/ser_logo.png" alt="" /></a> &nbsp;&nbsp;&nbsp;
			<a href="//www.rtve.es/alacarta/audios/la-lanzadera/lanzadera-apoyo-reyes-emprendedores-pequenos-empresarios-20-06-14/2622978/"><img width="100px" src="assets/rne_logo.png" alt=""></a>
		</div>
	</div>
</div>

<!-- Team -->
<div class="container-fluid bg-landing bg-gray ng-scope">
	<div class="container">
		<div id="team" class="row text-center">
			<h2 class="ng-binding">Equipo</h2>
			<div class="col-sm-6">
				<figure class="img_team">
					<img src="assets/team_paola.jpg">
				</figure>
				<p class="text-center name">Paola García
					<a href="//twitter.com/ggarciapaola"><span class="fa fa-twitter"></span></a>
					<a href="//linkedin.com/in/paolagarcia"><span class="fa fa-linkedin"></span></a>
				</p>
				<p class="text-center carge ng-binding">Co-Founder &amp; CEO</p>
			</div>
			<div class="col-sm-6">
				<figure class="img_team">
					<img src="assets/team_carlos.jpg">
				</figure>
				<p class="text-center name">Carlos Azaustre
					<a href="//twitter.com/carlosazaustre"><span class="fa fa-twitter"></span></a>
					<a href="//linkedin.com/in/carlosazaustre"><span class="fa fa-linkedin"></span></a>
				</p>
				<p class="text-center carge ng-binding">Co-Founder &amp; CTO</p>
			</div>
		</div>
	</div>
</div>
'), $templateCache.put("partials/home/home.terms.html", '<div class="container">
<h2 class="text-center">Condiciones de uso del sitio "doondeapp"</h2>
<p>
El sitio <a href="//doondeapp.co">doondeapp.co</a>	(en lo sucesivo	denominada	“doondeapp”,	“nosotros”	o	“nuestro”)	ofrece	una	plataforma
en	Internet	que	conecta	cocineros	con	clientes	que	buscan	contratar	sus	servicios	gastronómicos	(en	lo
Sucesivo,	los	“Servicios”),	a	los	cuales	pueden	acceder	en <a href="//doondeapp.co">https://doondeapp.co</a>.
</p>
<p>
  Al	utilizar	la	página	web,	usted	acepta	cumplir	los	términos	y	condiciones	de	estos	Términos	de	Servicio
(los	“Términos”)	y	estar	legalmente	vinculado	a	ellos,	se	convierta	o	no	en	un	usuario	registrado	en	los
servicios.	Estos	Términos	rigen	su	acceso	y	uso	de	la	página	y	los	servicios,	así	como	todos	los	contenidos
colectivos	(definidos	a	continuación)	y	su	participación	en	el	programa	de	referencias	(definido	a
continuación)	y	constituyen,	asimismo,	un	contrato	vinculante	entre	usted	y	doondeapp.
</p>
<p>
  doondeapp podrá	revisar	y	actualizar	estas	Condiciones	en	cualquier	momento	y	sin	previo	aviso.	Le
recomendamos	que	consulte	periódicamente	las	Condiciones	de	Uso	publicadas	en	este	sitio.	Al	seguir
accediendo	y	usando	este	sitio	después	de	cualquier	modificación,	se	entenderá	que	Usted	acepta
dichas	modificaciones.
</p>
<p>
  Cualquier	incumplimiento	de	los	términos	aquí	expuestos,	facultará	a	doondeapp	para	eliminar	su	Cuenta	de
Usuario.	Mediante	la	aceptación	de	estos	términos,	confirma	que	doondeapp	no	será	responsable	del
contenido	publicado	relativo	a	los	Servicios	ofertados,	por	lo	que	consiente	hacer	uso	de	los	mismos
bajo	su	propia	responsabilidad	y	riesgo.
</p>
<p>
  No	podrá	interferir	en	los	sistemas	de	seguridad	de	este	sitio	ni	hacer	un	uso	inadecuado	del	mismo	ni
de	los	recursos	del	sistema,	servicios	o	redes	conectadas	a	la	web	o	accesibles	a	través	de	ella.
Únicamente	podrá	hacer	uso	del	sitio	con	fines	legales.
</p>
<p>
  ES	IMPORTANTE	QUE	USTED	SEPA	QUE	doondeapp	ES	UN	MERO	INTERMEDIARIO	DE	SERVICIOS	ENTRE
USUARIOS	Y	COCINEROS, Y	NO	OFRECE	SERVICIOS	DE	CATERING,	PREPARACIÓN	O	ENTREGA	DE
COMIDA.	doondeapp	NO	CONTROLA	NI SE	HACE	RESPONSABLE	DE	LOS	SERVICIOS	OFRECIDOS	POR	LOS
COCINEROS	QUE	SE	ANUNCIAN	EN	NUESTRA	WEB.	NO	ELEGIMOS	SUS	MENÚS,	NI	LOS	INGREDIENTES	NI
EL	NIVEL	DE	CALIDAD	QUE	DEBERÍAN	OFRECER	A	TRAVÉS	DE	NUESTRA	WEB,	POR	LO	QUE	LA
RESPONSABILIDAD	DERIVADA	DE	LOS	SERVICIOS	PRESTADOS,	CORRESPONDERÁ	EN	CUALQUIER	CASO	AL
COCINERO	Y	A	USTED	COMO	USUARIO,	QUE	DEBERÁ	TOMAR	TODAS	LAS	PRECAUCIONES	NECESARIAS
PARA	PROTEGER	SU	SALUD	Y	SEGURIDAD.	NO	PODEMOS	ASEGURAR	LA	BUENA	FE	DE	TODOS	LOS
USUARIOS	DE	LA	WEB.
</p>


<h3>Limitación	de	Garantías	y	Responsabilidad	de	doondeapp</h3>
<p>
  Usted	se	compromete	a	indemnizar,	defender	y	mantener	indemne	a	doondeapp,	sus	filiales,	proveedores	de
Contenido	y	sus	respectivos	administradores,	directivos,	empleados,	accionistas,	socios	y	agentes
(denominados	conjuntamente	"las	Partes”) de	cualquier	reclamación,	demanda,	pérdida,	daños,	costes
y	gastos	(incluyendo	los	honorarios	razonables	de	un	letrado	según	el	cliente)	en	los	que	pudiera	incurrir
cualquier	Parte	de	doondeapp	como	resultado	de	o	como	consecuencia	de	que	Usted	o	alguien	que	actúe	en
su	nombre	incumpliera	o	presuntamente	cualquier	término	del	presente	Acuerdo.
</p>
<p>
  (c)	EN	NINGÚN	CASO	doondeapp	NI	SUS	FILIALES,	PROVEEDORES	DE	CONTENIDO,	ASÍ	COMO	TAMPOCO	SUS
RESPECTIVOS	ADMINISTRADORES,	DIRECTIVOS,	EMPLEADOS,	ACCIONISTAS,	SOCIOS	O	AGENTES	SERÁN
RESPONSABLES	DE	CUALQUIER	DAÑO	FORTUITO,	INDIRECTO,	PUNITIVO,	EJEMPLAR	O	DERIVADO
(INCLUYENDO	DAÑOS	POR	PÉRDIDA	DE	BENEFICIOS	EMPRESARIALES,	INTERRUPCIONES,	PÉRDIDA	DE
INFORMACIÓN	EMPRESARIAL	U	OTRAS	PÉRDIDAS	PECUNIARIAS) DERIVADO	DE	CUALQUIER
RECLAMACIÓN,	PÉRDIDA,	DAÑO,	ACCIÓN,	JUICIO	U	OTROS	PROCEDIMIENTOS	QUE	SURJAN	BAJO	LOS
TÉRMINOS	O	POR	CAUSA	DE	ESTE	ACUERDO,	INCLUIDOS,	SIN	LIMITACIÓN,LA	INSATISFACCION	CON	EL
SERVICIO	RECIBIDO,	CALIDAD	ESPERADA,	RESULTADO	O	APARIENCIA	DE	LA	COMIDA	PREPARADA,	ASÍ
COMO	DE	DERECHOS	CONCEDIDOS	A	USTED	EN	VIRTUD	DEL	PRESENTE	ACUERDO,	INCLUSO	SI
NOSOTROS	HEMOS	SIDO	ADVERTIDOS	DE	LA	POSIBILIDAD	DE	DICHOS	DAÑOS	E	INDEPENDIENTEMENTE
DE	QUE	LA	ACCIÓN	SE	BASE	EN	UN	CONTRATO,	ILÍCITO	CIVIL	(INCLUYENDO	LA	NEGLIGENCIA),	ENTRE
OTROS.	NINGUNA	ACCIÓN,INDEPENDIENTEMENTE	DE	SU	FORMA	O	NATURALEZA,	QUE	SE	DERIVE	DE
ESTE	ACUERDO,	PODRÁ	INTERPONERSE	POR	USTED	O	EN	SU	NOMBRE	UNA	VEZ	TRANSCURRIDOS	DOS
(2)	AÑOS	DESDE	QUE	SURGIERA	LA	CAUSA	DE	ACCIÓN.
</p>
<p>
  (d)	SIN	PERJUICIO	DE	CUALQUIER	OTRO	TÉRMINO	EXPUESTO	EN	EL	PRESENTE	ACUERDO,	doondeapp	NO	SE
HARÁ	RESPONSABLE	DE	LOS	DAÑOS,	COSTES	O	PÉRDIDAS	SUFRIDOS	COMO	RESULTADO	DE
MODIFICACIONES	EN	EL	SERVICIO	HECHAS	POR	USTED	O	CUANDO	SE	REALICEN	FUERA	DEL	CONTEXTO
DE	ESTA	WEB	DIRECTAMENTE	CON	EL	COCINERO	CONTRATADO.
</p>
<p>
  (e)	La	contratación	de	los	Servicios	anunciados	por	doondeapp	y	elección	de	tipo	de	servicio,	cocinero,	calidad
de	la	comida	preparada, verificación	de	que	el	cocinero	cumple	con	los	requisitos	legales	y	sanitarios
para	la	realización	de	dichos	servicios,	se	harán	bajo	su	riesgo	y	responsabilidad.	doondeapp	no	será
responsable	por	negligencia	de	la	falta	de	veracidad	de	los	Servicios	ofertados	por	los	cocineros	que	aquí
se	anuncian	ni	por	los	daños	derivados	de	la	actuación	de	los	mismos	a	terceros.
</p>
<p>
  (f)	El	usuario	deberá	reclamar	responsabilidad	si	correspondiera,	al	cocinero	contratado	y	en	caso	de	no
haber	responsabilidad	determinable,	el	usuario	siempre	podrá	valorar	con	su	opinión	el	servicio
recibido,	siendo	este	el	mejor	garante	para	la	excelencia	del	servicio	y	la	información	al	usuario
interesado	en	futuros	servicios	de	dicho	profesional.
</p>
<p>
  (a)	Siempre	y	cuando	el	Contenido	sea	utilizado	de	acuerdo	con	los	términos	del	presente	Acuerdo	y
Usted	no	incurra	de	ninguna	otra	forma	en	incumplimiento	del	mismo,	y	teniendo	en	cuenta	que,	como
única	y	exclusiva	compensación	por	cualquier	incumplimiento	de	las	declaraciones	y	garantías
establecidas	en	estos	términos,	se	indemnizará	con	un	máximo	de	120€	a	la	parte	afectada.	Únicamente
corresponderá	dicha	indemnización,	si	doondeapp	no	puede	cumplir	con	dichas	obligaciones y	el	importe
máximo	de	la	indemnización	será	de	120€	por	todos	los	conceptos	y	afectados	bajo	un	mismo	caso.
Todo	lo	anterior	constituye,	la	declaración	completa	de	las	obligaciones	de	indemnización	de	doondeapp	en
virtud	del	presente	Acuerdo.
</p>
<p>
  (b)	La	indemnización	anteriormente	expuesta,	estará	condicionada	a	que	Usted	notifique	por	escrito	y
de	inmediato	a	doondeapp	de	la	existencia	de	dicha	reclamación y	de	nuestro	derecho	a	asumir	la	gestión,	el
acuerdo	o	la	defensa	de	cualquier	reclamación	o	litigio.	Usted	acuerda	cooperar	con	doondeapp	en	la	defensa
de	dicha	reclamación	o	litigio	y	podrá	tener	el	derecho	de	participar	en	dicho	litigio	bajo	su	única
responsabilidad.	doondeapp	no	se	hará	responsable	de	los	gastos	legales	y	otros	gastos	incurridos	con
anterioridad	a	la	notificación	de	la	reclamación.
</p>

<h3>Cuentas de Usuario</h3>
<p>
  Los	 usuarios	 que	 deseen	 registrarse	 en	 el	 sitio	 web	 deberán	 ser	 mayores	 de	 18	 años	 y	 contar	 con
capacidad	legal	plena.
</p>
<h4>Creación de una cuenta de usuario</h4>
<p>
  Para	crear	una	cuenta	de	usuario	ubicada	en	el	site	doondeapp.co,	deberá	aceptar	estas	Condiciones	de	Uso,
facilitar	una	dirección	válida	de	correo	electrónico	y	cualquier	otra	información	requerida	durante	el
proceso	de	registro.	Usted	es	responsable	de	facilitar	información	completa	y	veraz durante	su	registro
para	obtener	una	Cuenta	de	Usuario.	Es	responsable	de	comunicar	a	doondeapp	cualquier	cambio	en	la
información	contenida	en	la	misma	y	de	mantener	la	seguridad	de	su	cuenta	así	como	de	la	privacidad
de	la	contraseña	asociada	a	la	misma.	También	es	responsable	de	todo	el	contenido	publicado	en	la	web
o	través	de	nuestros	servicios,	en	uso	de	su	cuenta	de	usuario,	y	de	cualquier	otra	actividad	derivada	del
uso	de	la	misma.	Nos	reservamos	el	derecho	a	denegar	el	registro	y	acceso	de	cualquier	persona	a
nuestros	Servicios
</p>
<p>
  La	compañía	se	reserva	el	derecho	a	eliminar	o	quitar	contenido	publicado	por	los	usuarios	en	el	sitio,
incluidos	perfiles	de	cocineros	y	a	restringir,	suspender	o	anular	el	acceso	a	todo	o	parte	de	este	sitio,	sin
previo	aviso	ni	responsabilidad.	La	compañía	podrá	revisar	cualquier	contenido	publicado	por	los
usuarios	o	cocineros.
</p>

<h3>Disposiciones Generales</h3>
<p>
  (a)	El	hecho	de	que	doondeapp no	persevere	en	el	estricto	cumplimiento	de	cualquier	cláusula	de	este
Acuerdo	no	se	interpretará	como	una	renuncia	a	ella	ni	a	ninguno	de	sus	derechos.
</p>
<p>
  El	presente	Acuerdo	le	vincula	a	Usted	y	no	podrá	asignarlo	a	terceros	sin	el	consentimiento	previo	y	por
escrito	de	doondeapp.	doondeapp podrá	asignar	este	Acuerdo	a	cualquier	otra	parte	sin	el	consentimiento	de
Usted	siempre	que	la	tercera	parte	acepte	vincularse	a	sus	términos.
</p>
<p>
  (b)	Para	mayor	información,	rogamos	nos	contacte	en support@doondeapp.co o	por correo posta el en	Call de	Jaraiz	de	la	Vera	16,	3D
C.P	28011	Madrid.
</p>

<h3>Propiedad intelectual</h3>
<p>
  Todos	los	contenidos	(incluidas	la	organización	y	presentación	de	dichos	contenidos)	de	este	sitio	web
(denominados	en	lo	sucesivo	"los	Contenidos")	son	propiedad	de	doondeapp y	sus	concedentes, y	están
protegidas	por	las	leyes	de	propiedad	intelectual	entre	las	que	se	incluyen	leyes	sobre	copyright,	marcas
comerciales,	nombres	comerciales,	nombres	de	dominios	de	Internet	y	derechos	similares.
</p>
<p>
  El	diseño	de	doondeapp,	doondeapp,	y	el	nombre	o	el	eslogan	de	cualquier	otro	producto	o	servicio	incluidos	en	el
Sitio	son	marcas	comerciales	de	doondeapp y	de	sus	proveedores	o	licenciantes.	No	se	podrán	copiar,	imitar
ni	usar,	parcial	o	totalmente,	sin	el	consentimiento	previo	por	escrito de	doondeapp o	del	titular	de	la	marca
comercial	aplicable.	No	podrá	utilizar	metaetiquetas	ni	cualquier	otro	"texto	oculto"	que	incluya
"doondeapp"	o	cualquier	otro	nombre,	marca	comercial	o	nombre	de	servicio	o	producto	de	doondeapp sin
nuestro	permiso	previo	por	escrito.	Además,	el	aspecto	del	Sitio,	incluidos	los	encabezados	de	página,	los	gráficos	personalizados,	los	iconos	de	botón	y	los	archivos	de	comando,	conforman	la	marca	de
servicio,	la	marca	comercial	y	la	imagen	comercial	de	doondeapp y	no	se	podrán	copiar,	imitar	ni	utilizar,	de
forma	total	o	parcial,	sin	nuestro	permiso	previo	por	escrito.	El	resto	de	las	marcas	comerciales,	las
marcas	registradas,	los	nombres	de	productos	y	los	nombres	de	empresas	o	logotipos	que	se	mencionan
en	el	Sitio	son	propiedad	de	sus	respectivos	titulares.	Las	referencias	a	productos,	servicios,	procesos	u
otra	información	por	medio	de	un	nombre	comercial,	una	marca,	un	proveedor	u	otros	no	constituye	ni
implica	aprobación,	patrocinio	o	recomendación	por	nuestra	parte.
</p>

<h3>Protección de Datos y Privacidad</h3>
<p>
  Para	utilizar	algunos	de	los	servicios,	los	usuarios	deben	proporcionar	previamente	ciertos	datos	de
carácter	personal.	Para	ello,	doondeapp tratará	automatizadamente los	datos	personales	en	cumplimiento
con	la	Ley	15/1999	de	13	de	diciembre	de	Protección	de	Datos	de	Carácter	Personal	(en	adelante	LOPD)
y	el	RD	de	desarrollo	1720/2007	(en	adelante	RD).	Para	ello,	el	usuario	puede	acceder	a	la	política
seguida	en	el	tratamiento	de	los	datos	personales	así	como	el	establecimiento	de	las	finalidades
previamente	establecidas,	a	lo	dispuesto	en	las	condiciones	definidas	en	la	Política	de	Protección	de
Datos	que	presenta	sitio	web.
</p>

<h3>Suspensión del servicio</h3>
<p>
  doondeapp	queda	facultado	para	suspender	el	Servicio, a	su	propia	discreción	por	cualquier	razón	cualquiera
que	 sea,	 incluyendo	 pero	 no	 limitado	 a,	 reparaciones,	 mantenimiento o	 actualizaciones, y	 no	 será
responsable	de	ninguna	pérdida,	daño,	coste	o	gasto	achacable	a	esa	suspensión	o	indisponibilidad	del
Sitio.
</p>
<p>
  doondeapp	se	reserva	el	derecho	de	realizar	cualquier	cambio	en	el	funcionamiento	y	contenido	del	sitio	sin
tener	que	obligación	de	notificarlo.
</p>

<h3>Aceptación</h3>
<p>
  USTED	RECONOCE	HABER	LEÍDO	Y	ENTENDIDO	ESTE	ACUERDO	Y	HABER	TENIDO	LA	OPORTUNIDAD	DE
CONSULTAR	CON	UN	ASESOR	LEGAL	INDEPENDIENTE	ANTES	DE	SU	FORMALIZACIÓN.	USTED	SE
COMPROMETE	A	CUMPLIR	LAS	CLÁUSULAS	Y	CONDICIONES	DE	ESTE	ACUERDO.	ASIMISMO	RECONOCE
QUE	EL	PRESENTE	ES	EL	ACUERDO	ÍNTEGRO	Y	EXCLUSIVO	FORMALIZADO	ENTRE	USTED	Y	doondeapp,	EL
CUAL	ANULA	CUALQUIER	CONTRATO	O	ACUERDO	ANTERIOR,	YA	SEA	ORAL	O	ESCRITO,	Y	CUALQUIER
OTRA	FORMA	DE	COMUNICACIÓN	ENTRE	AMBAS	PARTES	RELACIONADA	CON	EL	CONTENIDO	DE	ESTE
ACUERDO.
</p>

<h3>Ley Aplicable</h3>
<p>
  El	Sitio	está	controlado,	gestionado	y	administrado	por doondeapp,	con	sede	en	Calle	Jaraiz	de	la	Vera	16	3D	C.P
28011	Madrid.	 Se	puede	acceder	al	Sitio	desde	todas	las	provincias	y	territorios	de	España,	así	como
desde	cualquier	país	del	mundo.	Dado	que	las	jurisdicciones	poseen	leyes	que	pueden	diferir	de	las	de
</p>
<p>
  España,	al	acceder	a	este	Sitio	Usted	acuerda	y	se	compromete	a	someter	cualquier	asunto	relacionado
con	el	uso	de	este	Sitio,	o	el	acceso	al	mismo,	a	las	leyes	españolas	que	resulten	de aplicación	(sin
referencia	a	conflictos	de	principios	legales).
</p>
<p>
  Asimismo	Usted	se	compromete	a	someter	cualquier	demanda	o	reclamación	derivadas	de	la	presente	a
la	jurisdicción	y	competencia	de	los	Tribunales	de	la	Madrid,	España,	y	que	lo	hace	voluntariamente.
</p>

<hr/>

<h2 class="text-center">Para usuarios contratantes</h2>
<p>
  El	usuario	interesado	en	contratar	los	Servicios	de	un	cocinero	a	través	de	doondeapp,	podrá:
  <ul>
    <li>Crear	un	perfil	de	usuario.</li>
    <li>Buscar	cocineros	registrados	en	nuestra	web.</li>
    <li>Comunicarse	con	cocineros.</li>
    <li>Valorar	y	opinar	sobre	el	Servicio	recibido por	los	cocineros.</li>
    <li>Acceder	a	otros	Servicios	y	funcionalidades	facilitadas	por	doondeapp.</li>
  </ul>
El	usuario	acepta	y	es	conocedor	de	que	todos	los	pedidos	están	sujetos	a	la	aceptación	de	los	mismos
por	parte	del	cocinero.	Los	términos	del	pedido	se	acordarán	entre	el	usuario	y	el	cocinero.	doondeapp	no	es
responsable	del	desarrollo	del	mismo	ni	de	su	ejecución	y	no	garantiza	que	las	Partes	cumplan	con	las
obligaciones	acordadas.
</p>
<h3>Obligaciones del usuario</h3>
<p>
Los	Servicios	deberán	utilizarse,	respetando	siempre	estos	términos	de	uso.	El	contenido	y	material	que
publiques	como	parte	de	tu	perfil,	deberá	cumplir	con	las	reglas	establecidas	en	“creación	de	cuentas	de
usuario”.
</p>
<p>
  Además	serás	responsable	de verificar	el	precio	del	menú solicitado,	que	puede	variar	en	el	tiempo	y
será	determinado	a	discreción	del	cocinero.
</p>
<p>
  Será	tu	responsabilidad	comprobar	que	el	cocinero	cumple	con	los	requisitos	sanitarios	(higiene	y
seguridad)	,	las	regulaciones	y	leyes	que	apliquen	en	todo	momento.
</p>
<p>
  Las	opiniones	y	evaluaciones	de	los	servicios,	deberán	ser	justas,	honestas	y	razonables.
</p>
<p>
  Deberás	verificar	toda	la	información	facilitada	por	el	Cocinero	en	relación	con	los	menús	y	los
ingredientes.
</p>
<p>
  Deberás	notificar	inmediatamente	a	doondeapp	en	el	caso de	que	tengas	alguna	razón	para	creer	o
sospechar	que	un	cocinero	u	otro	usuario,	está	incumpliendo	los	términos	de	servicio	o	que	el	perfil	de
un	cocinero	no	es	veraz	o	es	falso,	impreciso	o	incompleto.
</p>

<h3>Cancelaciones y reembolsos</h3>
<ol>
  <li>
    <p>
      Aceptas	que	la	cancelación	y	reembolso	establecida	en	la	legislación	sobre	consumidores	no
será	de	aplicación	a	estos	Servicios.	Sin	embargo,	y	a	menos	que	un	cocinero	establezca	lo
contrario	expresamente,		la	cancelación	y	reembolso	se	regirán	por	las	siguientes	reglas:
    </p>
    <p>
      Si	cancelas	un	Servicio	comunicándolo al cocinero a través de la plataforma doondeapp.co al menos	72
horas	antes	de	su	celebración,	podrás	ser	rembolsado	con	el	100%	de	lo	abonado	menos	la
parte	correspondiente	a		la	comisión	de	doondeapp,	en	parte	destinada	a	pagar	a	la	plataforma
que gestiona	los	pagos.
    </p>
    <p>
      Si	cancelas	un	Servicio	comunicándolo al cocinero a través de la plataforma doondeapp.co al	menos	24
horas	antes	de	su	celebración,	podrás	ser	rembolsado	con	el	50%	de	lo	abonado	menos	la	parte
correspondiente	a	la	comisión	de	doondeapp,	en	parte	destinada	a	pagar	a	la	plataforma
que	gestiona	los	pagos.
    </p>
    <p>
      No	corresponderá	reembolso	si	comunicándolo al cocinero a través de la plataforma doondeapp.co dentro	de
        las	24	horas	anteriores	a	su	celebración
    </p>
    <p>
      -No	corresponderá	devolución	íntegra	en	los	casos	de	fuerza	mayor,	si	no	que	podrá	optarse	por
un	reembolso	del	50%	del	servicio	abonado menos	la	parte	correspondiente	a	la	comisión	de
doondeapp,	en	parte	destinada	a	pagar	a	la	plataforma	que	gestiona	los	pagos o	la	elección	de	otro
día	u otro cocinero por	parte	del	usuario,	para	su	cumplimiento.
    </p>
  </li>
</ol>

<h3>Exclusión de garantías</h3>
<ol>
  <li>
    Aceptas	y	das	tu	consentimiento	a	que	los	Servicios	llevados	a	cabo	por	doondeapp	están	limitados	a
conectar	usuarios	interesados	en	la	comida	preparada	casera	con cocineros locales	que	la
proveen.	Cuando	contratas	un	Servicio	de	comida	preparada,	doondeapp	no	garantiza:
    <ul>
      <li>Que	los	menús	preparados	serán	de	tu	gusto,	requisitos	dietéticos	específicos	u	otros
requerimientos.</li>
      <li>Que	el	cocinero	contratado	cumple	con	los	estándares legales	para	el	desarrollo	de	su
actividad.</li>
      <li>Que	el	perfil	de	los	cocineros	es	auténtico	y	veraz</li>
      <li>Que	la	información	disponible	en	el	perfil	de	un	cocinero,	incluidas	las	recetas,	es	veraz,
precisa	y	completa.</li>
      <li>La	identidad	del	cocinero	que	se	anuncia	a	través	de	la	web.</li>
    </ul>
  </li>
  <li>Como	usuario,	garantizas	que	solo	adquirirás	los	menús	para	tu	consumo	propio	y	no	para	fines
comerciales,	incluida la	venta	de	menús	a	otros	consumidores,	la	cual	queda	expresamente
prohibida.</li>
  <li>doondeapp	no	se	hace	responsable	de	la	calidad	de	los	Menús	entregados	por	los	cocineros.		Los
términos	de	servicio	de	entrega,	calidad,	precio…,	de	los	menús,	deberán	ser	concertados
previamente	entre	usuario	y	cocinero.</li>
  <li>En	el	caso	de	que	haya	una	disputa	entre	un	cocinero	y	un	usuario	o	si	el	menú	entregado,	no
cumple	los	estándares	de	calidad	o	satisfacción	del	usuario,	aceptas	que	doondeapp	no	será
responsable	en	ningún	sentido	de las	 pérdidas	y	daños	materiales	o	personales sufridos	o
incurridos	por	el	usuario	con	motivo	del	servicio	de	comida	contratado	de	un	cocinero	y	que
eximes	a	doondeapp	de	cualquier	reclamación	o	responsabilidad	al	respecto	de	dicha	disputa</li>

    <li>De acuerdo con el Reglamento Europeo de 13 de diciembre de 2014, por el cual se actualizan y modifican las Directivas
        relativas al etiquetado de alimentos envasados, usted tiene derecho a conocer la composición y procedencia de los platos preparados
        que adquiera en cualquier establecimiento físico u online, por lo que no olvide solicitar dicha información a su cocinero,
        y en caso de que este se negara a facilitársela, póngase en contacto con doondeapp, para poder tomar las medidas oportunas al respecto.</li>

</ol>

<hr/>

<h2 class="text-center">Para Cocineros</h2>
<p>
  Si	eres	cocinero	y	estás	interesado	en	el	uso	de	nuestros	Servicios,	deberás	hacerlo	de	acuerdo	con	estos
términos	y	condiciones	de	servicio,	además	de	aquellos	aquí	establecidos	que	rigen	con	carácter	general
para	todos	los	usuarios.
</p>
<p>
  Será	responsabilidad	del	cocinero,	cumplir	con	la	legislación	vigente	en	esta	materia.	Los	cocineros	que
quieran	ofrecer	sus	Servicios,	mediante	la	aceptación	de	estos	términos,	manifiestan	conocer	y	cumplir
con	la	legislación	vigente	en	su	territorio,	así como	tener	todos	los	permisos	y	licencias	necesarios	para
el	desarrollo	de	los	mismos.
</p>
<p>
  Una	vez	registrado	como	cocinero	y	en	cumplimiento	de los	presentes	términos,	doondeapp	te	facilitará	el
uso	de	los	Servicios	de	acuerdo	con	lo	establecido	en	las	siguientes	cláusulas.
</p>

<h3>Registro</h3>
<p>
  Registrandote	en	doondeapp.co,	consientes	que	doondeapp	efectúe	las	comprobaciones	necesarias	para	verificar
tu	identidad.	Dicha	verificación	de	identidad	le	distinguirá	de	otros	cocineros	no	verificados	y	otorgará
mayor	confianza	al	cliente	a	la	hora	de	elegirle	como	proveedor.
</p>

<h3>Los servicios</h3>
<p>
  Los	Servicios	para	preparación	de	comida	comprenden	los	siguientes	puntos:
  <ul>
    <li>Asignación	de	perfil	(incluyendo	foto)	al	que	podrán	acceder	los clientes/usuarios	de
doondeapp.co</li>
    <li>Posibilidad	de	customizar	tu	perfil	añadiendo	información	sobre	tu	experiencia	y
preferencias	sobre	el	servicio	de	entrega	de	los	platos/menús.</li>
    <li>Anunciar o menús platos	disponibles	para	pedidos.</li>
    <li>Establecer	un	precio	para	los	platos o menús anunciados</li>
    <li>Evaluar	y	comentar	a	otros	usuarios</li>
    <li>Otras	funcionalidades/actualizaciones	que	doondeapp	podrá	ofrecerte.</li>
  </ul>
</p>

<h3>Perfil</h3>
<ol>
  <li>Garantizas	que	eres	el	proveedor	de	los	menús anunciados	en	tu	perfil</li>
  <li>Tu	perfil	deberá	contener	al	menos:	información	sobre	tu	identidad,	descripción	de	los	menús
disponibles,	incluyendo	los	ingredientes	utilizados	y	los	servicios	que	ofreces,	y	el	precio	por	los
menús.</li>
</ol>

<h3>Obligaciones como cocinero</h3>
<ol>
  <li>Mediante	la	aceptación	de	anunciarte	en	doondeapp	y	registrarte	como	cocinero	para	comercializar
tus	menús,	manifiestas que	toda	la	información	contenida	en	tu	perfil	respecto	a	la	preparación,
provisión	y/o	envío	de	los	menús,	y	cualquier	otra	información	facilitada	(incluidas	los
ingredientes	de	los	menús)	o	comentarios	hechos	a	otros	usuarios:
    <ul>
      <li>Será	veraz,	correcta	y	actualizada</li>
      <li>Cumplirá	con	los	estándares	de	la	industria	en	la	que	operas</li>
      <li>No	vulnerará	ninguna	ley	o	regulación	al	respecto,	incluidas	las	buenas	prácticas	en	cuanto	a
higiene	en	la	preparación	de	los	menús	y	cuando	resulte	aplicable,	las	normas	de	seguridad
alimentaria	basadas	en	los	estándares	fijados	por	el	Ministerio	de	Sanidad	para	cada	momento.</li>
      <li>No	contravenir	ni	vulnerar	la	legislación	sobre	sanidad,	consumo	y	e-commerce.</li>
      <li>No	publicar	contenido	ni	comunicarse	con	otros	usuarios	de	manera	obscena,	ofensiva	o
difamatoria</li>
    </ul>
    Si	cualquier	usuario	intenta	contactarle	directamente,	sin	utilizar	los	servicios	de	doondeapp,	deberá
ignorarlo	o	de	lo	contrario,	doondeapp	quedará	facultado	para	eliminar	el	perfil	de	usuario	y	cocinero
implicados.
  </li>
  <li>Haciendo	uso	de	los	Servicios	de	doondeapp:
    <ul>
      <li>Garantizas	ser	el	proveedor	de	los	servicios	anunciados</li>
      <li>Te	comprometes	a	mantener	la	confidencialidad	de	toda	la	información,	comunicación	y
correspondencia	con	los	usuarios	y	la	información	relativa	a	proceso	de	pedido.</li>
      <li>Te	comprometes	a	notificar	a	doondeapp	cualquier	sospecha	de	incumplimiento	de	estos	términos
por	parte	de	cualquier	otro	cocinero.</li>
        <li> De acuerdo con el Reglamento Europeo de 13 de diciembre de 2014, por el cual se modifican y actualizan las directivas
            relativas al etiquetado de alimentos, se hace imprescindible cumplir con las normas de etiquetado de los productos
            alimenticios para que los consumidores dispongan de información esencial, legible y comprensible y puedan comprar dichos
            productos con conocimiento de causa. Por motivos de seguridad pública, las nuevas normas refuerzan la protección contra los alérgenos.</li>
        <li> Dicho esto, queda obligado a proporcionar la información relativa a los alérgenos que se encuentren en la composición de los alimentos
            empleados para la elaboración de los platos. Dicha información podrá darse de manera verbal o escrita.
            Para más información, por favor visite el siguiente link, donde encontrará las distintas formas de informar
            al consumidor cumpliendo con la legislación vigente.
            <a href="http://www.madridsalud.es/temas/ALERGENOS_ALIMENTOS_SIN_ENVASAR.pdf">http://www.madridsalud.es/temas/ALERGENOS_ALIMENTOS_SIN_ENVASAR.pdf</a> </li>
    </ul>
  </li>
  <li>Consientes	que	doondeapp,	ante	cualquier	sospecha	de	incumplimiento	de	estos	términos,
incumplimiento	de	los	estándares	o	requisitos	de	doondeapp	para	anunciarte	en	la	web	o	sospecha de	falsedad	de	tu	perfil,	elimine	dicho	perfil	bajo	su	más	absoluta	discrecionalidad	y	previa
notificación	por	escrito	al	cocinero.</li>
</ol>

<h3>Cargos y pagos.</h3>

<p>Todos los cargos a usuarios hechos a través de doondeapp.co, se harán y gestionarán mediante la plataforma de pago Stripe Payments Europe, Ltd. (“Stripe”).</p>


<p>El cliente pagará el precio de los platos o menús incluidos en el pedido, establecido por el cocinero, más la comisión porcentual establecida para doondeapp (en parte destinada a pagar a la plataforma que gestiona los pagos)
    y comunicada al cliente al seleccionar un pedido de un cocinero en la plataforma doondeapp.co.
    El pago se hará previo a la realización del Servicio, en el momento de solicitarlo via doondeapp.co.</p>

<p>
    Tras cada pedido, doondeapp emitirá una transferencia a la cuenta bancaria  del cocinero (cuenta indicada por el propio cocinero en su perfil en doondeapp.co)
    con valor de la cantidad correspondiente al precio de los platos o menús incluidos en el pedido, una vez doondeapp haya recibido la cantidad correspondiente a dicho pedido
    proveniente de la plataforma de pago Stripe (lo que sucede tipicamente 7 días después de que el cliente sea cargado) y
    siempre y cuando el servicio se haya completado y no exista ninguna reclamación interpuesta con respecto a ese pedido. </p>

<p>Si hay alguna queja de cualquiera de las partes implicadas, deberás avisar a doondeapp en un plazo de 24 horas tras la fecha del Servicio.
    doondeapp mediará entre ambas partes cuando sea necesario y tomará la decisión definitiva en todas las disputas.
</p>

<p>Para enviar una reclamación válida con el objetivo de recibir un reembolso por el servicio, el cliente/usuario debe (a) informarnos del problema con el Servicio,
    en las 24 horas siguientes a la realización del Servicio (e incluir fotos o cualquier otro tipo de prueba) y responder a nuestras solicitudes de información o
    cooperación, (b) no haber causado de forma directa o indirecta el problema y (c) haber llevado a cabo todos los esfuerzos razonables para intentar remediar
    las circunstancias del problema con el Servicio con el cocinero antes de hacer la reclamación.
</p>
<ol>
    <li>	La reclamación se interpondrá por correo electrónico a la dirección support@doondeapp.co </li>

    <li>	El usuario que pide un reembolso indicará el importe del Reembolso solicitado, que puede ser total o parcial.</li>

    <li>	Es posible, que en el desarrollo de tu actividad, tengas que hacer frente a otros cargos, que te serán notificados
        durante el proceso de registro. Estos cargos no incluyen IVA ni otros impuestos, que de resultar aplicables, deberán ser abonados aparte.</li>


</ol>




<h5> © doondeapp 2014. Todos los derechos reservados.</h5>

</div>
'), $templateCache.put("partials/modal/stripeForm.html", '<div id="stripeForm" class="modal fade" ng-controller="CheckoutCtrl">
  <div class="modal-dialog" ng-init="getData()">
    <div class="modal-content">

			<div class="modal-header">
        <button type="button" class="close" ng-click="$hide()">×</button>
        <h4 class="modal-title">Finalizar pedido</h4>
      </div>

			<div class="modal-body">
        <p class="text-center">
          <span class="fa fa-cutlery"></span> Plato pedido
          <br>{{ dish.name }}
        </p>
        <form stripe-form="stripeCallback" ng-submit="onSubmit()" name="myform" data-abide>
					<label>Número de tarjeta</label>
					<div class="form-group has-feedback">
						<input class="form-control input-lg"
									 ng-model="number"
									 placeholder="---- ---- ---- ----"
									 payments-format="card"
									 payments-validate="card"
								/>
						<span class="fa fa-credit-card form-control-feedback"></span>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<label>Fecha de caducidad</label>
							<div class="form-group has-feedback">
								<input class="form-control input-lg"
											ng-model="expiry"
											placeholder="MM/AA"
											payments-format="expiry"
											payments-validate="expiry"/>
								<span class="fa fa-calendar-o form-control-feedback"></span>
							</div>
						</div>
						<div class="col-sm-6">
							<label>
								Código de control
								<a href="#"
									data-placement="bottom"
									data-content="El CVC son los 3 o 4 últimos dígitos del reverso de tu tarjeta."
									data-animation="am-flip-x"
									data-auto-close="1"
									bs-popover>
									<span class="fa fa-question-circle"></span>
								</a>
							</label>
							<div class="form-group has-feedback" >
								<input name="input" class="form-control input-lg"
											ng-model="cvc"
											placeholder="CVC"
											payments-format="cvc"
											payments-validate="cvc"/>

								<span class="fa fa-lock form-control-feedback"></span>

							</div>
						</div>
					</div>

				<button type="submit" class="btn btn-block btn-info btn-payment">Pagar &euro; {{ dish.price }}</button>
				</form>

      </div>

			<div class="modal-footer">
        <span class="fa fa-lock"></span> Transacción segura encriptada a 128 bits
				<a href="#"
					data-placement="bottom"
					data-content="Los datos de tu tarjeta son encriptados y no son alojados en nuestro servidor. La plataforma Stripe se encarga del procesamiento y cobro del dinero. Si tienes dudas acerca de su política, visita nuestro FAQ y Términos de uso."
					data-animation="am-flip-x"
					data-auto-close="1"
					bs-popover>
					<span class="fa fa-question-circle"></span>
				</a>
      </div>


		</div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
'), $templateCache.put("partials/profile/profile.chefAccount.html", '<div class="container-fluid col-sm-offset-2 col-sm-8" ng-init="profile.particularChef = true">

	<div ng-hide="profile.user.chef.status" class="alert alert-warning">
		<h2>¡Genial! ¡Ya casi está!</h2>
		<p>
			Sólo nos falta un paso para publicar tu plato como cocinero en doondeapp. Rellena tus datos de contacto y se listará!
		</p>
	</div>

	<div ng-show="profile.noIban" class="alert alert-warning">
		<span class="fa fa-info-circle fa-2x pull-left"></span>
		<p>
			Necesitamos tu número de <strong>IBAN</strong> para que puedas recibir los pagos por tus platos/menús vendidos.
		</p>
	</div>

	<p>
		doondeapp necesita los siguientes datos para poder transferirte el dinero que ganes vendiendo tus platos o menús.
	</p>
	<p>
		<div class="text-center">
			<button class="btn btn-default" ng-click="profile.particularChef = true; profile.corporateChef = false">
				<span class="fa fa-user"></span> Soy particular
			</button>
			<button class="btn btn-default" ng-click="profile.corporateChef = true; profile.particularChef = false">
				<span class="fa fa-building"></span> Soy empresa
			</button>
		</div>
	</p>
	<form name="chefProfile" ng-show="profile.particularChef" ng-submit="profile.updateChefProfile()">
		<div class="form-group">
			<label class="control-label"><i class="fa fa-user"></i> Nombre Completo</label>
			<input type="text" class="form-control" ng-model="profile.user.chef.fullname" required/>
		</div>
		<div class="form-group">
			<label class="control-label"><i class="fa fa-folder-o"></i> DNI</label>
			<input type="text" class="form-control" ng-model="profile.user.chef.vat" required/>
		</div>
		<div class="form-group">
			<label class="control-label"><i class="fa fa-building"></i> Domicilio</label>
			<textarea rows="4" class="form-control" ng-model="profile.user.chef.address" required></textarea>
		</div>
		<div class="form-group">
			<label class="control-label"><i class="fa fa-calendar"></i> Fecha de Nacimiento</label>
			<input name="datePicker" type="text" bs-datepicker class="form-control" ng-class="{\'has-error\': datePicker.$invalid}"  ng-model="profile.user.chef.birthdate"  data-max-date="{{profile.maxDate}}"  placeholder="Día" data-min-date="{{profile.minDate}}" required/>
		</div>

		<div class="form-group has-feedback" ng-class="{ \'has-error\' : chefProfile.phone.$invalid && chefProfile.phone.$dirty }">
			<label class="control-label"><i class="fa fa-phone"></i> Teléfono</label>
			<input
				type="text"
				class="form-control"
				name="phone"
				ng-model="profile.user.chef.phone"
				placeholder="Tu número de contacto. Fijo o móvil"/>
			    <!--ng-pattern="/^[6]\\d{8}|[9]\\d{8}$/" -->

			<div class="help-block text-danger" ng-if="chefProfile.phone.$dirty" ng-messages="chefProfile.phone.$error">
				<div ng-message="pattern">Teléfono incorrecto</div>
			</div>
		</div>
			<div class="form-group has-feedback" ng-class="{ \'has-error\' : chefProfile.iban.$invalid && chefProfile.iban.$dirty }">
				<label class="control-label"><i class="fa fa-university"></i> Número de cuenta bancaria (IBAN)</label>
				<a href="#"
				   data-placement="top"
				   data-toggle="tooltip"
				   data-original-title="Ésta será la cuenta en la que ingresemos los pagos que recibas por tus platos/menús vendidos. En España el código comienza por ES, seguido de 22 dígitos"
					>
				<span class="fa fa-question-circle"></span>
				</a>
				<input
					type="text"
					name="iban"
					ng-iban
					ng-model="profile.user.chef.iban"
					class="form-control"
					placeholder="Ej: ESxx xxxx xxxx xx xxxxxxxxxx"
					ng-pattern="/^ES\\d{2}[ ]\\d{4}[ ]\\d{4}[ ]\\d{2}[ ]\\d{10}|ES\\d{22}$/"
					 />
				<div class="help-block text-danger" ng-if="chefProfile.iban.$dirty" ng-messages="chefProfile.iban.$error">
					<div ng-message="required">Es necesario que introduzcas tu número de cuenta en formato IBAN.</div>
					<div ng-message="pattern">Código IBAN Inválido</div>
				</div>
			</div>
		<div class="text-center">
			<button type="submit" class="btn btn-primary">Actualizar Información</button>
		</div>
	</form>

	<form name="chefProfileCorp" ng-show="profile.corporateChef" ng-submit="profile.updateChefProfile()">
		<div class="form-group">
			<label class="control-label"><i class="fa fa-briefcase"></i> Razón Social</label>
			<input type="text" class="form-control" ng-model="profile.user.chef.fullname" required/>
		</div>
		<div class="form-group">
			<label class="control-label"><i class="fa fa-folder-o"></i> NIF/CIF</label>
			<input type="text" class="form-control" ng-model="profile.user.chef.vat" required/>
		</div>
		<div class="form-group">
			<label class="control-label"><i class="fa fa-building"></i> Dirección de Facturación</label>
			<textarea rows="4" class="form-control" ng-model="profile.user.chef.address" required></textarea>
		</div>
		<div class="form-group has-feedback" ng-class="{ \'has-error\' : chefProfileCorp.phoneCorp.$invalid && chefProfileCorp.phoneCorp.$dirty }">
			<label class="control-label"><i class="fa fa-phone"></i> Teléfono</label>
			<input
			type="text"
			class="form-control"
			name="phoneCorp"
			ng-model="profile.user.chef.phone"
			ng-pattern="/^[6]\\d{8}|[9]\\d{8}$/"
			placeholder="Tu número de contacto. Fijo o móvil"/>

			<div class="help-block text-danger" ng-if="chefProfileCorp.phoneCorp.$dirty" ng-messages="chefProfileCorp.phoneCorp.$error">
				<div ng-message="pattern">Teléfono incorrecto</div>
			</div>
		</div>
		<div class="form-group has-feedback" ng-class="{ \'has-error\' : chefProfileCorp.ibanCorp.$invalid && chefProfileCorp.ibanCorp.$dirty }">
			<label class="control-label"><i class="fa fa-university"></i> Número de cuenta bancaria (IBAN)</label>
			<a href="#"
			data-placement="top"
			data-content="Ésta será la cuenta en la que ingresemos los pagos que recibas por tus platos/menús vendidos. En España el código comienza por ES, seguido de 22 dígitos"
			data-animation="am-flip-x"
			data-auto-close="1"
			bs-popover>
			<span class="fa fa-question-circle"></span>
			</a>
			<input
				type="text"
				name="ibanCorp"
				ng-iban
				ng-model="profile.user.chef.iban"
				class="form-control"
				placeholder="Ej: ESxx xxxx xxxx xx xxxxxxxxxx"
				ng-pattern="/^ES\\d{2}[ ]\\d{4}[ ]\\d{4}[ ]\\d{2}[ ]\\d{10}|ES\\d{22}$/"
				/>
				<div class="help-block text-danger" ng-if="chefProfileCorp.ibanCorp.$dirty" ng-messages="chefProfileCorp.ibanCorp.$error">
					<div ng-message="required">Es necesario que introduzcas tu número de cuenta en formato IBAN.</div>
					<div ng-message="pattern">Código IBAN Inválido</div>
				</div>
		</div>
		<div class="text-center">
			<button type="submit" class="btn btn-primary">Actualizar Información</button>
		</div>
	</form>
</div>
'), $templateCache.put("partials/profile/profile.dishes.html", '<div ng-show="profile.user.dishes.length === 0" class="alert alert-info text-center">
	<p>
		Aún no has listado ningún plato/menú. ¡Sube el primero!
	</p>
	<a class="btn btn-primary btn-lg" href="/upload/1">
		<span class="fa fa-cutlery"></span> Sube tu primer plato/menú
	</a>
</div>

<!-- Dishes list by User -->
<div ng-show="profile.user.dishes.length > 0" class="row">

	<div class="col-sm-6 col-md-6 col-lg-4" ng-repeat="dish in profile.user.dishes track by dish._id">
		<div class="preview panel panel-default" >
			<div class="panel-heading">
				<h3 class="panel-title">{{ dish.name | truncate: 18 }}</h3>
			</div>

			<a ng-href="/dish/edit/{{ dish._id }}">
				<figure>
					<div class="image-inner-shadow"></div>
					<img class="dish-img-thumb" ng-src="{{ dish.photo }}" alt="{{ dish.description }}" />
				</figure>

				<div class="panel-body">
					<div class="dish-price">
						<span class="price">{{ dish.price | currency:"&euro;" }}</span>
					</div>
					<p>{{ dish.description | truncate: 38 }}</p>
				</div>
			</a>
			<div class="panel-footer">
				<span class="fa fa-map-marker"></span> <em>{{ dish.locationText }}</em>
			</div>
			<div class="panel-footer text-center">

				<button ng-click="confirmDelete = !confirmDelete" class="btn btn-danger"
					data-placement="bottom" data-toggle="tooltip" data-original-title="Eliminar">
				<span class="fa fa-trash"></span>
				</button>
				<a href="#" ng-href="/dish/edit/{{ dish._id }}" class="btn btn-success"
					data-placement="bottom" data-toggle="tooltip" data-original-title="Editar">
					<span class="fa fa-pencil"></span>
				</a>
				<a href="#" ng-show="dish.published" ng-href="/dish/{{ dish._id }}" class="btn btn-info top"
					data-placement="bottom" data-toggle="tooltip" data-original-title="Ver ficha pública">
					<span class="fa fa-eye"></span>
				</a>
				<a href="#" ng-hide="dish.published" ng-href="/profile/account" class="btn btn-warning top"
					data-placement="bottom" data-toggle="tooltip" data-original-title="No publicado">
					<span class="fa fa-warning"></span>
				</a>
			</div>

		</div>
		<div ng-show="confirmDelete" class="text-center">
			<p>¿Estás seguro de borrar este plato? Esta acción no se puede deshacer.</p>
			<button
				ng-click="confirmDelete=false"
				class="btn btn-default">
				Cancelar
			</button>
			<button
				ng-click="profile.removeDish($index)"
				class="btn btn-danger"
				data-placement="bottom"
				data-toggle="tooltip"
				data-original-title="Eliminar">
			<span class="fa fa-trash"> Eliminar</span>
		</div>
	</div>

</div>
'), $templateCache.put("partials/profile/profile.html", '<div class="container-fluid">

  <div class="col-md-4 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Perfil</h3>
      </div>
      <div class="panel-body">
        <legend>
          <span class="fa fa-eye"></span> <a ng-href="/user/{{ profile.user._id }}">Ver mi perfil público</a>
        </legend>
        <legend>
          <span class="fa fa-file-text-o"></span>
          <a href="#" ng-click="showEditProfile = !showEditProfile">Editar mi perfil
            <span class="fa fa-caret-down"></span>
          </a>
        </legend>

        <div ng-show="showEditProfile">
          <!-- Image Crop -->
          <image-crop
            data-width="199"
            data-height="199"
            data-shape="circle"
            data-result="imageCropResult"
            data-step="imageCropStep"
            ng-show="showImageCropper">
          </image-crop>
          <!--./end Image Crop -->

          <img ng-hide="showImageCropper" id="avatarPreview" class="img-profile-rounded" ng-src="{{ profile.user.avatar }}" alt="{{ profile.user.displayName }}" />
          <br>
          <div class="text-center">
            <button class="btn btn-info" ng-click="showImageCropper = true" ng-hide="showImageCropper">
              <span class="fa fa-camera"></span>
              Cambiar tu imagen
            </button>
          </div>
          <br><br>

          <form method="post" ng-submit="profile.updateProfile()">
            <div class="form-group">
              <label class="control-label"><i class="fa fa-user"></i> Mi Nombre</label>
              <input type="text" class="form-control" ng-model="profile.user.displayName" />
            </div>
            <div class="form-group">
              <label class="control-label"><i class="fa fa-envelope"></i> Correo Electrónico</label>
              <input type="email" class="form-control" ng-model="profile.user.email" />
            </div>
            <div class="form-group">
              <label class="control-label"><i class="fa fa-pencil-square-o"></i> Sobre mi</label>
              <textarea rows="3" class="form-control" ng-model="profile.user.biography"></textarea>
            </div>
            <div class="form-group">
              <label class="control-label"><i class="fa fa-globe"></i> Ciudad</label>
              <input type="text" class="form-control" ng-model="profile.user.city" />
            </div>
            <div class="text-center">
              <button class="btn btn-lg btn-info">Actualizar</button>
            </div>
          </form>
        </div>

      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Cuentas</h3>
      </div>
      <div class="panel-body">
        <legend><i class="fa fa-link"></i> Cuentas enlazadas</legend>
        <div class="btn-group-vertical">
          <button class="btn btn-sm btn-danger" ng-if="profile.user.facebook" ng-click="profile.unlink(\'facebook\')">
            <i class="fa fa-facebook"></i> Desenlaza tu Facebook
          </button>
          <button class="btn btn-sm btn-info" ng-if="!profile.user.facebook" ng-click="profile.link(\'facebook\')">
            <i class="fa fa-facebook"></i> Enlaza con tu Facebook
          </button>
          <!--<button class="btn btn-sm btn-danger" ng-if="user.google" ng-click="profile.unlink(\'google\')">
            <i class="fa fa-google-plus"></i> Unlink Google Account
          </button>
          <button class="btn btn-sm btn-primary" ng-if="!user.google" ng-click="profile.link(\'google\')">
            <i class="fa fa-google-plus"></i> Link Google Account
          </button>-->
        </div>
      </div>
    </div>

  </div>

  <div class="col-md-8 col-lg-9">

    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Panel de Control</h3>
      </div>

      <div class="panel-body">

        <ul class="nav nav-pills" role="tablist">
          <li ui-sref-active="active" role="presentation" >
            <a ui-sref=".dishes">
              <span class="fa fa-cutlery"></span>
              Platos/Menús listados
            </a>

          </li>
          <li ui-sref-active="active" role="presentation">
            <a ui-sref=".messages">
              <span class="fa fa-send"></span>
              Pedidos <span ng-show="profile.user.messages.length > 0" class="badge progress-bar-danger">{{ profile.user.messages.length }}</span>
            </a>
          </li>
      <!--    <li ui-sref-active="active" role="presentation">
            <a ui-sref=".transactions">
              <span class="fa fa-exchange"></span>
              Transacciones
            </a>
          </li>-->
          <li ui-sref-active="active" role="presentation" ng-show="profile.user.dishes.length > 0">
            <a ui-sref=".chefAccount">
              <span class="fa fa-credit-card"></span>
              Tu cuenta Chef
            </a>
          </li>
        </ul>
        <hr>

        <div ui-view></div>

      </div>
    </div>
  </div>
</div>
'), $templateCache.put("partials/profile/profile.messages.html", '<div class="alert alert-info text-center" ng-show="profile.user.orders.length === 0">
	<p>
		Aún no has realizado o recibido ningún pedido!
	</p>
</div>
<table ng-show="profile.receivedMsgClick" ng-hide="profile.user.orders.length === 0" class="table table-hover">
	<thead>
	<tr>
		<th>Usuario</th>
		<th>Fecha</th>
		<th>Plato/menú</th>
		<th>Último Mensaje</th>
		<th>Estado</th>
	</tr>
	</thead>
	<tbody>
	<tr ng-repeat="order in profile.user.orders track by order._id" ng-click="profile.goOrder(order._id)">
		<td style="vertical-align:middle">
			<img ng-show="profile.user.chef.status" width="48px" class="img-circle" ng-src="{{ order.from.avatar }}" alt="{{ order.from.displayName }}"
				 data-placement="top"
				 data-toggle="tooltip"
				 data-original-title="{{ order.from.displayName }}"/>

			<img ng-show="!profile.user.chef.status" width="48px" class="img-circle" ng-src="{{ order.to.avatar }}" alt="{{ order.to.displayName }}"
				 data-placement="top"
				 data-toggle="tooltip"
				 data-original-title="Hola"/>

			<!--</br>
			<span ng-show="profile.user.chef.status"><span ng-show="order.from.displayName" class="fa fa-user"></span> {{ order.from.displayName }}</span>
			<span ng-show="!profile.user.chef.status"><span ng-show="order.from.displayName" class="fa fa-user"></span> {{ order.to.displayName }}</span>
-->
		</td>

		<td style="vertical-align:middle">
			<span class="fa fa-calendar"></span>
			{{ profile.getLocalDate(order.messages[ order.messages.length - 1 ]) | date: "dd/MM/yyyy H:mm"}}
		</td>
		<td style="vertical-align:middle">
			<span class="fa fa-cutlery"></span> {{ order.dish.name }}
		</td>
		<td style="vertical-align:middle">
			<span class="fa fa-envelope"></span>
			{{ order.messages[ order.messages.length - 1 ].text | limitTo: 50 }}
		</td>
		<td style="vertical-align:middle">
			<div class="label label-warning" ng-if="order.state == \'pendingCook\'">
				<span class="fa fa-clock-o"></span>
				Pendiente de Aceptar
			</div>
			<div class="label label-info" ng-if="order.state == \'okCook\'">
				<span class="fa fa-check"></span>
				Aceptada
			</div>
			<div class="label label-success" ng-if="order.state == \'payed\'">
				<span class="fa fa-money"></span>
				Pagada
			</div>
			<!--<button ng-click="profile.setDish(order.dish)"
							class="btn btn-info"
							data-template="partials/modal/stripeForm.html"
							bs-modal="modal">
				Finalizar pedido
			</button>-->
		</td>
	</tr>
	</tbody>
</table>
'), $templateCache.put("partials/profile/profile.transactions.html", '<div ng-show="profile.user.transactions.length === 0" class="alert alert-info text-center">
	<p>Aún no has realizado o recibido ningún pedido</p>
</div>
<table ng-show="profile.user.transactions.length > 0" class="table table-hover">
	<thead>
		<tr>
			<th>Fecha</th>
			<th>Plato/menú</th>
			<th>De</th>
			<th>Hora</th>
			<th>Detalles</th>
		</tr>
	</thead>
	<tbody>
		<tr ng-repeat="order in profile.user.transactions">
			<td>{{ order.delivery.date | date: dd/MMMM/yyyy }}</td>
			<td>{{ order.dish }}</td>
			<td>{{ order.to }}</td>
			<td>{{ order.delivery.hour }}:{{ order.delivery.min }}</td>
			<td>{{ order.details }}</td>
		</tr>
	</tbody>
</table>
'), $templateCache.put("partials/upload/form-step1.html", '<!-- Form /step1 -->
<h3 class="text-center">Primer paso para subir tu plato/menú</h3>

<label>
  Escribe un nombre para tu plato/menú
    <a href="#" class="top"
       data-placement="top"
       data-toggle="tooltip"
       data-original-title="El nombre debe identificar a tu plato/menú. Por ejemplo: \'Lentejas con chorizo\' o \'Menú vegetal\'"
    >
    <span class="fa fa-question-circle"></span>
  </a>
</label>
<div class="form-group has-feedback">
  <input class="form-control input-lg" name="dishTitle" type="text" ng-model="upload.dish.title" placeholder="Nombre de tu plato/menú" required autofocus>
  <span class="fa fa-cutlery form-control-feedback"></span>
</div>

<label>
  Sube una imagen de tu plato/menú
    <a href="#" class="top"
       data-placement="top"
       data-toggle="tooltip"
       data-original-title="Intenta que esté bien iluminada, enfocada y el plato/menú tenga buena presencia. ¡Una buena foto te hará llegar muchos pedidos!">
    <span class="fa fa-question-circle"></span>
  </a>
</label>
<!--<div class="form-group has-feedback">
  <input class="form-control input-lg"
         id="dishImg"
         name="dishImg"
         onchange="angular.element(this).scope().showPreview()"
         type="file"
         file-model="upload.dish.image"
         accept="image/png, image/jpeg"
         placeholder="Imagen de tu plato/menú"
         required >
  <span class="fa fa-camera form-control-feedback"></span>
</div>-->
<!-- Image Crop -->
<image-crop
  data-width="480"
  data-height="340"
  data-shape="square"
  data-result="imageCropResult"
  data-step="imageCropStep">
</image-crop>
<!--./end Image Crop -->

<br><br><br>

<div class="form-group">
	<div class="col-xs-6 col-xs-offset-3">
	    <a ng-click="goToNextSection(addishForm.$valid)" class="btn btn-block btn-info">
	      Siguente paso <span class="fa fa-arrow-circle-right"></span>
	    </a>
	</div>
</div>
'), $templateCache.put("partials/upload/form-step2.html", '<!-- Form /step2 -->
<h3 class="text-center">Describe tu plato/menú</h3>


<label>
  Añade una descripción
    <a href="#" class="top"
       data-placement="bottom"
       data-toggle="tooltip"
       data-original-title="En la descripción es importante incluir los ingredientes que has usado, si has tenido en cuenta alergias, intolerancias, es un plato/menú vegano, etc... ¡Cuanto más detalles proporciones sobre el plato/menú, más éxito tendrá!">
    <span class="fa fa-question-circle"></span>
  </a>
</label>
<div class="form-group has-feedback">
  <textarea class="form-control input-lg"
            rows="5"
            name="dishDes"
            ng-model="upload.dish.description"
            placeholder="Describénos tu plato/menú :) ¿Cómo lo has cocinado? ¿Qué ingredientes tiene?..."
            required autofocus></textarea>
    <div ng-messages="addishForm.dishDes.$error" ng-if="formStepSubmitted">
      <div ng-message="required">Descripción requerida</div>
    </div>
  <span class="fa fa-pencil-square-o form-control-feedback"></span>
</div>

<div class="row">
  <div class="col-sm-offset-3 col-sm-6 text-center">
    <label>
      Añade un precio:
        <a href="#" class="top"
           data-placement="top"
           data-toggle="tooltip"
           data-original-title="Este precio es el doondeapp te pagará por cada plato/menú que se venda.">
        <span class="fa fa-question-circle"></span>
      </a>
    </label>
    <div class="form-group has-feedback">
      <input class="form-control input-lg"
             name="dishPrice"
             type="number"
             min="1"
             ng-model="upload.dish.price"
             placeholder="Precio"
             required>
        <div ng-messages="addishForm.dishPrice.$error" ng-if="formStepSubmitted">
            <div ng-message="required">Precio requerido</div>
            <div ng-message="min">Precio minimo 1€</div>
        </div>
      <span class="fa fa-euro form-control-feedback"></span>
    </div>
  </div>
  <!--<div  class="col-sm-offset-2 col-sm-5">
    <label>
      Se cobrará al cliente:
        <a href="#" class="top"
           data-placement="top"
           data-toggle="tooltip"
           data-original-title="Este precio es el que doondeapp cobrará al cliente final que solicite tu plato/menú. En él están incluidas las tasas del servicio.">
        <span class="fa fa-question-circle"></span>
      </a>
    </label>
    <div class="form-group has-feedback">

      <input class="form-control input-lg"
             type="number"
             placeholder="Precio final"
             ng-readonly=true
             value="{{Math.round(upload.dish.finalPrice * 100) / 100}}" >

      <span class="fa fa-euro form-control-feedback"></span>
    </div>
  </div>-->
</div>

<div class="form-group row">
	<div class="col-xs-6 col-xs-offset-3">
	    <a ng-click="goToNextSection(addishForm.$valid)" class="btn btn-block btn-info">
	    Último paso <span class="fa fa-arrow-circle-right"></span>
	    </a>
	</div>
</div>
'), $templateCache.put("partials/upload/form-step3.html", '<!-- Form /step3 -->
<h3 class="text-center">Forma de entrega</h3>

<label>
  ¿Cómo vas a entregar tu plato/menú?
    <a href="#" class="right"
       data-placement="right"
       data-toggle="tooltip"
       data-original-title="En doondeapp los cocineros sois quienes decidís cual será la forma de entrega de vuestra comida casera.
       Elige tus preferencias. Puedes elegir varias de ellas. ">
        <span class="fa fa-question-circle"></span>
    </a>

</label>
  <div class="btn-group delivery-type">
    <label  data-placement="bottom"
            data-toggle="tooltip"
            data-original-title="Marca esta opción si quieres entregar tú mismo tu plato o menu a clientes de tu zona.
          Añadiendo este valor añadido podrás desmarcarte frente a otros cocineros de tu zona que no lo ofrezcan." class="btn btn-default btn-lg btn-block">
      <input type="radio" ng-model="upload.dish.delivery"   value="location" class="btn btn-default" >
      <span class="fa fa-taxi fa-3x fa-fw pull-left"></span>
      Entrego el pedido en la casa<br> u oficina del cliente.

    </label>

    <label data-placement="bottom"
           data-toggle="tooltip"
           data-original-title="Marca esta opción si quieres el cliente sea quien se acerque a tu direccion o lugar que tu le indiques a recoger tu plato."
        class="btn btn-default btn-lg btn-block">
      <input type="radio" ng-model="upload.dish.delivery" value= "pickup" class="btn btn-default">
      <span class="fa fa-child fa-3x fa-fw pull-left"></span>
      El cliente puede venir a recoger <br>el pedido a mi dirección.

    </label>



      <label data-placement="bottom"
           data-toggle="tooltip"
           data-original-title="Marca esta opción si ofreces servicio de chef a domicilio, cocinando el menú solicitado en el domicilio u
          oficina de la persona que te pide el menú."
           class="btn btn-default btn-lg btn-block">
      <input type="radio" ng-model="upload.dish.delivery" value= "home"  class="btn btn-default">
      <span class="fa fa-home fa-3x fa-fw pull-left"></span>
      Voy a cocinar a <br>casa del cliente.
      </a>
    </label>
    <div ng-messages="addishForm.delivery.$error" ng-if="formStepSubmitted">
      <div ng-message="required">Tipo de servicio requerido</div>
    </div>
  </div>
  <br><br>

<label>
 Tu dirección o Código Postal
    <a href="#" class="top"
       data-placement="top"
       data-toggle="tooltip"
       data-original-title="¿En que zona vives? ó ¿Por que zona lo entregarás?">
    <span class="fa fa-question-circle"></span>
  </a>
</label>
<div class="form-group has-feedback">
  <autocomplete-searchbar></autocomplete-searchbar>
</div>


<div class="text-center">
  <a ng-click="upload.submit()"
     class="btn btn-primary" >
      <span class="fa fa-cloud-upload"></span> Sube tu plato/menú
  </a>
</div>
'), $templateCache.put("partials/upload/form.html", '<div class="container-fluid">
	<div class="row">

		<div class="col-sm-8">
			<!-- Form add dish -->
			<div class="panel panel-default addish-form-container">
				<div class="panel-heading">
					<h3 class="text-center">Añade tu plato/menú a doondeapp</h3>
				</div>
				<div class="panel-body">
					<div id="status-buttons" class="text-center">
						<a ui-sref-active="active" ui-sref=".step1"><span>1</span> Foto</a>
						<a ui-sref-active="active" ui-sref=".step2"><span>2</span> Descripción</a>
						<a ui-sref-active="active" ui-sref=".step3"><span>3</span> Entrega</a>
					</div>

					<form id="formSearch" class="addish-form" name="addishForm" >
						<div id="form-views" ui-view></div>
          </form>
					<div ng-if="newDishError" class="alert alert-error">
						Campo/s invalido/s: {{ newDishError }}
					</div>
				</div>
			</div>
		</div>

		<aside class="col-sm-4">
			<!-- Preview -->
			<div class="alert alert-info">
				Así se verá tu plato/menú en la página principal de la web
			</div>
			<div class="preview panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">{{ upload.dish.title | limitTo: 35 }}</h3>
				</div>
				<figure class="preview-figure">
					<div class="image-inner-shadow"></div>
					<!--<img src="https://s3-eu-west-1.amazonaws.com/doondeappapp/dishes/default_dish.png" class="img-responsive" id="dishImgPrev" alt="" />-->
					<img src="https://s3-eu-west-1.amazonaws.com/doondeappapp/dishes/default_dish.png"
							 ng-src="{{ imagePreview }}"
							 class="img-responsive"
							 id="dishImgPrev">
				</figure>
				<div class="panel-body">
					<h4>
						<!--<span class="label label-primary">{{ upload.dish.kind }}</span>-->
						<div class="delivery-type-group">
	            		<a href="#"
								ng-if="upload.dish.delivery==\'location\'"
								class="btn btn-primary"
								data-placement="bottom"
								data-content="El cocinero se encarga de entregar el pedido en la casa, oficina o punto donde se encuentre el cliente."
								data-animation="am-flip-x"
								data-auto-close="1"
								bs-popover>
								<span class="fa fa-taxi fa-2x fa-fw"></span>
							</a>
							<a href="#"
							   ng-if="upload.dish.delivery==\'pickup\'"
								class="btn btn-primary"
								data-placement="bottom"
								data-content="El cliente va a recoger el pedido a la casa o punto donde se encuentre el cocinero."
								data-animation="am-flip-x"
								data-auto-close="1"
								bs-popover>
								<span class="fa fa-child fa-2x fa-fw"></span>
							</a>
							<a href="#"
							   ng-if="upload.dish.delivery==\'home\'"
								class="btn btn-primary"
								data-placement="bottom"
								data-content="El cocinero se ofrece a cocinar en casa del cliente."
								data-animation="am-flip-x"
								data-auto-close="1"
								bs-popover>
								<span class="fa fa-home fa-2x fa-fw"></span>
							</a>
						</div>
						<div class="dish-price">
							<span ng-show="upload.dish.price" class="price">
								{{ Math.round(upload.dish.price * 100) / 100 | currency:"&euro;" }}
							</span>
						</div>
					</h4>
					<p class="preview-description">{{ upload.dish.description | limitTo: 100 }}</p>
				</div>
				<div class="panel-footer">
					<div class="media">
						<div class="pull-left">
							<img ng-src="{{ upload.user.avatar }}" class="img-rounded" />
						</div>
						<div class="media-body">
							{{ upload.user.displayName }}<br/>
							<em>{{ upload.user.city }}</em>
						</div>
					</div>
				</div>
			</div>
		</aside>

	</div>
</div>
') 