import multer from 'multer'

const storage = multer.diskStorage({
    filename: function(req,file,callback){
        callback(null,file.originalname)
    }
})

const upload = multer({storage})

export default upload

// const storage = multer.diskStorage({
//     filename: function(req, file, callback) {
//         callback(null, file.originalname);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith('image/')) {
//         cb(null, true);  // Accept the file
//     } else {
//         cb(new Error('Only image files are allowed'), false);  // Reject the file
//     }
// };

// const upload = multer({
//     storage,
//     fileFilter,
//     limits: { fileSize: 5 * 1024 * 1024 }  // Limit file size to 5MB
// });

// export default upload;



