export const generatePagination = (currentPage: number, totalPages: number) => {
   if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
   }

   if (currentPage <= 2) {
      return [1, 2, 3, '...', totalPages];
   }

   // if (currentPage >= 3) {
   //    return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
   // }

   if (currentPage >= totalPages - 1) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
   }

   return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
};