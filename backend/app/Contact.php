<?php

    namespace App;

    use Illuminate\Database\Eloquent\Builder;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Relations\BelongsTo;

    class Contact extends Model
    {

        /**
         * Define query scope for filtering by contact type.
         *
         * @param Builder $query
         * @param int $contactType
         * @return Builder
         */

        public function scopeOfType(Builder $query, int $contactType): Builder
        {
            return $query->where('type_id', $contactType);
        }

        /**
         * Define query scope for filtering by user ID (contacts created by user).
         *
         * @param Builder $query
         * @param int $userId
         * @return Builder
         */
        public function scopeCreatedByUser(Builder $query, int $userId): Builder
        {
            return $query->where('user_id', $userId);
        }

        /**
         * Define query scope for sorting.
         *
         * @param Builder $query
         * @param $sortColumn
         * @param string $sortDirection
         * @return Builder
         */
        public function scopeSort(Builder $query, $sortColumn, string $sortDirection = 'asc'): Builder
        {
            if ($sortDirection && $sortColumn) {
                return $query->orderBy($sortColumn, $sortDirection);
            }
            return $query;
        }

        /**
         * Scope a query to only include contacts of a specific department.
         *
         * @param Builder $query
         * @param array $departmentId
         * @return Builder
         */
        public function scopeOfDepartment(Builder $query, array $departmentId): Builder
        {
            return $query->whereIn('department_id', $departmentId);
        }

        /**
         * Define query scope for searching
         *
         * @param Builder $query
         * @param $searchTerm
         * @return Builder
         */
        public function scopeSearch(Builder $query, $searchTerm): Builder
        {
            return $query->where(function ($q) use ($searchTerm) {
                $q->where('name', 'like', "%$searchTerm%")
                    ->orWhere('surname', 'like', "%$searchTerm%")
                    ->orWhere('email', 'like', "%$searchTerm%")
                    ->orWhere('number', 'like', "%$searchTerm%")
                    ->orWhere('social_media_url', 'like', "%$searchTerm%")
                    ->orWhere('date_of_birth', 'like', "%$searchTerm%")
                    ->orWhere('note', 'like', "%$searchTerm%");
            });
        }

        /**
         * @return BelongsTo
         */
        public function user(): BelongsTo
        {
            return $this->belongsTo(User::class);
        }

        protected $fillable = [
            'profile_picture',
            'name',
            'surname',
            'email',
            'number',
            'social_media_url',
            'access',
            'date_of_birth',
            'type_id',
            'note',
            'department_id'
        ];
    }
