const routes = require('express').Router()

const {
  findAll,
  findById,
  save,
  update
} = require('./../controllers/controll-author')

/**
 * @swagger
 * /author:
 *   get:
 *     summary: Lista de autores
 *     description: Método que retorna una lista de autores
 *     responses:
 *       '200':
 *         description: Respuesta satisfactoria
 *         content:
 *           application/json:
 *             schema:
 *               type: object 
 *               properties: 
 *                 id: 
 *                   type: integer
 *                   description: Indica el id del autor
 *                   example: 3
 *                 name:
 *                   type: string
 *                   description: Especifica el nombre del autor
 *                   example: Gabriel Garcia Marquez
 *                 city:
 *                   type: string
 *                   description: Ciudad natal del autor
 *                   example: Cartagena
 *                 age:
 *                   type: integer
 *                   description: Especifica la edad del autor
 *                   example: 87
 *       '501':
 *         description: Respuesta erronea
 *         content: 
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Algo ha salido mal
 */
routes.get('/',findAll)
routes.get('/',(req,res)=>
  res.status(200).json({state:true,data:authors}))

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Recuperar un autor por ID
 *     description: Realiza una búsqueda por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id del autor para recuperar el objeto
 *     responses:
 *       '201':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: boolean
 *                   description: Indica que el objeto se encuentra o no
 *                 data:
 *                   type: object
 *                   properties:
 *                     id: 
 *                       type: integer
 *                       description: Indica el id del autor
 *                       example: 3
 *                     name:
 *                       type: string
 *                       description: Especifica el nombre del autor
 *                       example: Gabriel Garcia Marquez
 *                     city:
 *                       type: string
 *                       description: Ciudad natal del autor
 *                       example: Cartagena
 *                     age:
 *                       type: integer
 *                       description: Especifica la edad del autor
 *                       example: 87
 *       '401':
 *         description: NOT FOUND
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: boolean
 *                   description: Indica que el objeto no existe
 *                   example: false
 *                 msg:
 *                   type: string
 *                   description: Mensaje de error
 */
routes.get('/:id',findById)
routes.get('/:id',(req,res)=>{
  const {id} = req.params
  const author = authors.find( c => c.id === id )
  if( course != null ){
    return res.status(201).json({state:true,data:author})
  }else{
    return res.status(401).json({state:false,msg:"Id no Existe"})
  }
})

/**
 * @swagger
 * /:
 *   post:
 *     summary: Crea un nuevo autor
 *     requestBody:
 *       description: Inserta un nuevo registro
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id: 
 *                 type: integer
 *                 description: Indica el id del autor
 *                 example: 3
 *               name:
 *                 type: string
 *                 description: Especifica el nombre del autor
 *                 example: Gabriel Garcia Marquez
 *               city:
 *                 type: string
 *                 description: Ciudad natal del autor
 *                 example: Cartagena
 *               age:
 *                 type: integer
 *                 description: Especifica la edad del autor
 *                 example: 87
 *     responses:
 *       '201':
 *         description: SUCCESS
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id: 
 *                   type: integer
 *                   description: Indica el id del autor
 *                   example: 3
 *                 name:
 *                   type: string
 *                   description: Especifica el nombre del autor
 *                   example: Gabriel Garcia Marquez
 *                 city:
 *                   type: string
 *                   description: Ciudad natal del autor
 *                   example: Cartagena
 *                 age:
 *                   type: integer
 *                   description: Especifica la edad del autor
 *                   example: 87
 */
routes.post('/',save)
routes.post('/',(req,res)=>{
  const {id,name,credits} = req.body
  return res.status(201).json({"id":id,"name":name,"city":city, "age":age})
})

/**
 * @swagger
 * /{idA}:
 *   put:
 *     summary: Actualizar un autor por ID
 *     description: Actualiza la información de un curso existente usando su ID
 *     parameters:
 *       - in: path
 *         name: idA
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del curso a actualizar
 *     requestBody:
 *       description: Datos del curso que serán actualizados
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id: 
 *                 type: integer
 *                 description: Indica el id del autor
 *                 example: 3
 *               name:
 *                 type: string
 *                 description: Especifica el nombre del autor
 *                 example: Gabriel Garcia Marquez
 *               city:
 *                 type: string
 *                 description: Ciudad natal del autor
 *                 example: Cartagena
 *               age:
 *                 type: integer
 *                 description: Especifica la edad del autor
 *                 example: 87
 *     responses:
 *       '200':
 *         description: Curso actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id: 
 *                   type: integer
 *                   description: Indica el id del autor actualizado
 *                   example: 3
 *                 name:
 *                   type: string
 *                   description: Especifica el nombre del autor actualizado 
 *                   example: Gabriel Garcia Marquez
 *                 city:
 *                   type: string
 *                   description: Ciudad natal del autor actualizada
 *                   example: Cartagena
 *                 age:
 *                   type: integer
 *                   description: Especifica la edad del autor actualizada
 *                   example: 87
 *       '404':
 *         description: Curso no encontrado
 *       '400':
 *         description: Error en la solicitud
 */
routes.put('/:idA',update)

module.exports = routes