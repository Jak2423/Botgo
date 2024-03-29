export const generatePagination = (currentPage: number, totalPages: number) => {
   if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
   }

   if (currentPage <= 2) {
      return [1, 2, 3, 4, 5];
   }

   if (currentPage >= totalPages - 1) {
      return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
   }

   return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
};